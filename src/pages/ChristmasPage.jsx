import SnowMan from "../components/SnowMan";
import { useState, useRef } from "react";
import Decorations from "../components/Decorations";
import SnowEffect from "../components/SnowEffect";
import html2canvas from "html2canvas";

const ChristmasPage = () => {
  const audioRef = useRef(null);

  const [message, setMessage] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const decorationsRef = useRef(null);

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  const handleCapture = () => {

    if (decorationsRef.current) {
      html2canvas(decorationsRef.current, {
        ignoreElements: (element) => {
          return element.classList.contains("ignore-capture");
        },
      }).then((canvas) => {
        const newWindow = window.open("", "_blank");
        newWindow.document.body.appendChild(canvas);

        setTimeout(() => {
          newWindow.document.close();
          newWindow.focus(); 
        }, 500);
      });
    }
  };

  return (
    <div
      className="christmasPage"
      ref={decorationsRef}
      onDrop={() => console.log("item dropped")}
      onClick={playAudio}
    >
      <Decorations
        translate={translate}
        setTranslate={setTranslate}
        handleDragMove={handleDragMove}
      />
      <SnowMan />
      <SnowEffect />
      <img className="traineau" src="./images/traineau.webp"></img>

      {!message && (
        <button
          type="button"
          className="captureButton3 ignore-capture"
          onClick={() => setMessage(!message)}
        >
          Write a sweet message
        </button>
      )}
      {message && (
        <div className="shop message place">
          <div
            type="text"
            className="message"
            contentEditable
            placeholder=""
            style={{
              width: "80%",
              height: "90%",
              resize: "none",
              border: "solid 5px #CC231E",
              background: "#0F8A5F",
              textAlign: "center",
              textWrap: "wrap",
            }}
          >
            ❤️❤️❤️❤️❤️❤️❤️❤️ Type your sweet message here for your loves ones
            ❤️❤️❤️❤️❤️❤️❤️❤️{" "}
          </div>
          <button
            type="button"
            className="captureButton ignore-capture"
            onClick={handleCapture}
          >
            Capture your postcard
          </button>
          <button
            type="button"
            className="captureButton2 ignore-capture"
            onClick={() => setMessage(!message)}
          >
            Return{" "}
          </button>
        </div>
      )}

      <audio ref={audioRef} muted={false}>
        <source src="./sounds/christmas.mp3" type="audio/mp3" />
        <track kind="captions" />
      </audio>
    </div>
  );
};

Decorations.displayName = "Decorations";

export default ChristmasPage;
