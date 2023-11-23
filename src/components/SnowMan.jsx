import { useEffect, useState, useRef } from "react";
import snowMenList from "./snowMenList";

function SnowMan() {
  const [urlSnowMen, setUrlSnowMen] = useState("");
  const [nameSnowMen, setNameSnowMen] = useState("");

  const audio = useRef(null);

  useEffect(() => {
    const rand = Math.floor(Math.random() * 20);

    const apparitionSnowMen = setInterval(() => {
      const indexSnowMenRandom = Math.floor(Math.random() * 7);
      setUrlSnowMen(snowMenList[indexSnowMenRandom].url);
      setNameSnowMen(snowMenList[indexSnowMenRandom].name);
      if (audio.current != null) {
        audio.current.muted = false;
        audio.current.play();
      }
    }, rand * 1000);
    return () => clearInterval(apparitionSnowMen);
  }, []);

  function handleDisapear() {
    setUrlSnowMen("");
  }

  return (
    <div className="snowMan">
      <audio ref={audio} muted={false}>
        <track kind="captions" />
        <source src="./sounds/laughtSnowMan.mp3" type="audio/mp3" />
      </audio>
      <img
        className={nameSnowMen}
        src={urlSnowMen}
        onClick={handleDisapear}
        alt="snowMan"
      />
    </div>
  );
}

export default SnowMan;
