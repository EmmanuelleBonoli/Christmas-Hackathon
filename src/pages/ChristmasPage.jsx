import SnowMan from "../components/SnowMan";
import { useState, useRef } from "react";
import Decorations from "../components/Decorations";
import SnowEffect from "../components/SnowEffect";
import html2canvas from 'html2canvas';

const ChristmasPage = () => {

  const audioRef = useRef(null);

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
          return element.classList.contains('ignore-capture');
        },
      }).then((canvas) => {
        const newWindow = window.open('', '_blank');
        newWindow.document.body.appendChild(canvas);
  
        // Use a timeout to open the window after a short delay
        setTimeout(() => {
          newWindow.document.close(); // Close the document to complete loading
          newWindow.focus(); // Bring the window to the foreground
        }, 100);
      });
    }
  };
  

  return (
    <div className="christmasPage" onClick={playAudio} onDrop={() => console.log("item dropped")} onDragOver={() => {console.log("dragging over")}}>
        <Decorations ref={decorationsRef} translate={translate} setTranslate={setTranslate} handleDragMove={handleDragMove} />
        <SnowMan />
        <SnowEffect />
        <img className="traineau" src="./images/traineau.webp"></img> 
        <button type="button" className="capture" onClick={handleCapture}>Capture</button>
        <audio ref={audioRef}>
        <source src="./sounds/christmas.mp3" type="audio/mp3" />
        <track kind="captions" />
      </audio>
    </div>
  );
};

export default ChristmasPage;


