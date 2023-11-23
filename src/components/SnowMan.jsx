import { useEffect, useState, useRef } from "react";
import snowMenList from "./snowMenList";

function SnowMan() {
  const audio = useRef(null);

  const [snowMan, setSnowMan] = useState(0);
  const [urlSnowMen, setUrlSnowMen] = useState("");
  const [nameSnowMen, setNameSnowMen] = useState("");

  const [urlSnowBall, setUrlSnowBall] = useState("./images/snowBall.png");
  const [snowBall, setSnowBall] = useState({
    isVisible: false,
    positionX: 0,
    positionY: 0,
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

    const snowmanLeft = e.clientX
    const snowmanTop = e.clientY
    console.log(snowmanLeft, snowmanTop)

    const frames = 3000/8

    const pixelToGoInX = snowmanLeft - window.innerWidth/3
    const pixelToGoInY = snowmanTop

    const pixelPerFramesInX = pixelToGoInX/frames
    const pixelPerFramesInY = pixelToGoInY/frames

    const interval = setInterval(() => {
        setSnowBall((oldValue) => ({...oldValue, positionX: oldValue.positionX + pixelPerFramesInX, positionY: oldValue.positionY + pixelPerFramesInY }))
    }, 8)

    setTimeout(() => {
              setUrlSnowBall("./images/splashSnowBall.png");
         }, 2500);

    setTimeout(() => {
        clearInterval(interval)
        setSnowBall({positionX: 0,
            positionY: 0, isVisible: false})
        setUrlSnowBall("./images/snowBall.png");
        setSnowMan(1);
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
          className={`snowMensettings ${nameSnowMen}`}
          src={urlSnowMen}
          onClick={handleDisapear}
          alt="snowMan"
        />
      ) : (
        ""
      )}

      {snowBall.isVisible ? (
        <img
          src={urlSnowBall}
          className="snowBall"
          style={{
            left: `${snowBall.positionX}px`,
            top: `${snowBall.positionY}px`,
            // animation: snowBall.animate
            //   ? "moveSnowBall 3s ease"
            //   : "none",
            // "--targetLeft": `${snowBall.position.left}px`,
            // "--targetTop": `${snowBall.position.top}px`,
          }}
          alt="snowBall"
        />
      ) : null}
    </div>
  );
}

export default SnowMan;
