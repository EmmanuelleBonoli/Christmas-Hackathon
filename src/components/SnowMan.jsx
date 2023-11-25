import { useEffect, useState, useRef } from "react";
import snowMenList from "./snowMenList";

function SnowMan() {
  const audio = useRef(null);
  const audio2 = useRef(null);

  const [urlLutin, setUrlLutin] = useState("./images/lutin.png");
  const [nameLutin, setNameLutin] = useState("lucas");
  const [snowMan, setSnowMan] = useState(0);
  const [urlSnowMen, setUrlSnowMen] = useState("");
  const [nameSnowMen, setNameSnowMen] = useState("");
  const [animationSnowMen, setAnimationSnowMen] = useState("");

  const [urlSnowBall, setUrlSnowBall] = useState("./images/snowBall.png");
  const [snowBall, setSnowBall] = useState({
    isVisible: false,
    positionX: 0,
    positionY: 800,
  });

  const minInterval = 6000;
  const maxInterval = 20000;
  const intervalSnow =
    Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

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

  useEffect(() => {
    if (urlLutin === "./images/lutin.png") {
      setNameLutin("lucas");
    } else if (urlLutin === "./images/lutin2.png" ) {
      setNameLutin("lukasz");
    } else{
      setNameLutin("lea");
    }
  }, [urlLutin]);

  const handleDisapear = (e) => {
    setSnowBall((oldValue) => ({ ...oldValue, isVisible: true }));

    const snowmanRight = e.clientX;
    const snowmanBottom = window.innerHeight - e.clientY;

    const frames = 3000 / 8;
    const pixelToGoInX = snowmanRight  - window.innerWidth / 3;
    const pixelToGoInY = snowmanBottom 

    const pixelPerFramesInX = pixelToGoInX / frames;
    const pixelPerFramesInY = pixelToGoInY / frames;

    const interval = setInterval(() => {
      setSnowBall((oldValue) => ({
        ...oldValue,
        positionX: oldValue.positionX + pixelPerFramesInX,
        positionY: oldValue.positionY - pixelPerFramesInY,
      }));
    }, 8);
    if (audio2.current != null) {
      audio2.current.muted = false;
      audio2.current.volume = 0.9;
      audio2.current.play();
    }
    setTimeout(() => {
      setUrlSnowBall("./images/splashSnowBall.png");
      setAnimationSnowMen("fallSnowMen");
    }, 2500);

    setTimeout(() => {
      clearInterval(interval);
      setSnowBall({ positionX: 0, positionY: 800, isVisible: false });
      setSnowMan(1);
      setUrlSnowBall("./images/snowBall.png");
      setAnimationSnowMen("");

      if (urlLutin === "./images/lutin.png") {
        setUrlLutin("./images/lutin2.png");
      } else if(urlLutin === "./images/lutin2.png") {
        setUrlLutin("./images/lutin3.png");
      } else{
        setUrlLutin("./images/lutin.png");
      }
    }, 3000);
  };

  return (
    <div className="snowMan">
      <audio ref={audio} muted={false}>
        <track kind="captions" />
        <source src="./sounds/laughtSnowMan.mp3" type="audio/mp3" />
      </audio>
      <audio ref={audio2} muted={false}>
        <track kind="captions" />
        <source src="./sounds/YoshiHappySound.mp3" type="audio/mp3" />
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
          <img src={urlLutin} className={nameLutin} alt="Lutin" />
        </div>
      ) : null}
    </div>
  );
}

export default SnowMan;
