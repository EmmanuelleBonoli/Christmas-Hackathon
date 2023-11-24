import { useEffect, useState, useRef } from "react";
import snowMenList from "./snowMenList";

function SnowMan() {
  const audio = useRef(null);

  const [snowMan, setSnowMan] = useState(0);
  const [urlSnowMen, setUrlSnowMen] = useState("");
  const [nameSnowMen, setNameSnowMen] = useState("");
  const [animationSnowMen, setAnimationSnowMen] = useState("")

  const [urlSnowBall, setUrlSnowBall] = useState("./images/snowBall.png");
  const [snowBall, setSnowBall] = useState({
    isVisible: false,
    positionX: 0,
    positionY: 1000,
  });

  const minInterval = 3000;
  const maxInterval = 20000;
  const intervalSnow = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

  useEffect(() => {
    setUrlSnowMen("./images/snowManBoxer.png");
    setNameSnowMen("snowBoxer");

    const apparitionSnowMen = setInterval(() => {
      const indexSnowMenRandom = Math.floor(Math.random() * 7);
      setUrlSnowMen(snowMenList[indexSnowMenRandom].url);
      setNameSnowMen(snowMenList[indexSnowMenRandom].name);
      setSnowMan(0);
      if (audio.current != null) {
        audio.current.muted = false;
        audio.current.play();
      }
    }, intervalSnow);
    return () => clearInterval(apparitionSnowMen);
  }, []);

const handleDisapear = (e) => {
    setSnowBall((oldValue) => ({...oldValue, isVisible: true}))

    // const snowmanLeft = e.clientX
    // const snowmanTop = e.clientY

    const snowmanRight = e.clientX;
    const snowmanBottom = window.innerHeight - e.clientY;
    // console.log(snowmanLeft, snowmanTop)

    const frames = 3000/8

    // const pixelToGoInX = snowmanLeft - window.innerWidth/3
    // const pixelToGoInY = snowmanTop

    const pixelToGoInX =  snowmanRight + 100 - window.innerWidth/3  ; 
    const pixelToGoInY =  snowmanBottom - 200;
    // const pixelToGoInX =  snowmanRight   ; 
    // const pixelToGoInY =  snowmanBottom - 200;

    const pixelPerFramesInX = pixelToGoInX/frames
    const pixelPerFramesInY = pixelToGoInY/frames

    const interval = setInterval(() => {
        setSnowBall((oldValue) => ({...oldValue, positionX: oldValue.positionX + pixelPerFramesInX , positionY: oldValue.positionY - pixelPerFramesInY    }))
    }, 8)
    //      const interval = setInterval(() => {
    //      setSnowBall((oldValue) => ({...oldValue, positionX: oldValue.positionX - pixelPerFramesInX , positionY: oldValue.positionY - pixelPerFramesInY    }))
    //  }, 8)

    setTimeout(() => {
              setUrlSnowBall("./images/splashSnowBall.png");
              setAnimationSnowMen("fallSnowMen")
         }, 2500);

    setTimeout(() => {
        clearInterval(interval)
        setSnowBall({positionX: 0,
            positionY: 1000, isVisible: false})
        setSnowMan(1);
        setUrlSnowBall("./images/snowBall.png");
        setAnimationSnowMen("")
      
    }, 3000)

}

  return (
    <div className="snowMan">
      <audio ref={audio} muted={false}>
        <track kind="captions" />
        <source src="./sounds/laughtSnowMan.mp3" type="audio/mp3" />
      </audio>
      {snowMan === 0 ? (
        <img
          className={`snowMensettings ${nameSnowMen} ${animationSnowMen}`}
          src={urlSnowMen}
          onClick={handleDisapear}
          alt="snowMan"
        />
      ) : (
        ""
      )}

      {snowBall.isVisible ? (
        <div>
        <img
          src={urlSnowBall}
          className="snowBall"
          style={{
            left: `${snowBall.positionX}px`,
            top: `${snowBall.positionY}px`,
          }}
          alt="snowBall"
        />
        <img src="./images/lutin.png" className="lucas" alt="Lucas" />
        </div>
      ) : null}
    </div>
  );
}

export default SnowMan;
