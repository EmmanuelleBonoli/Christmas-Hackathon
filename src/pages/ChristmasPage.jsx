import SnowMan from "../components/SnowMan";
import Decorations from "../components/Decorations";
import SnowEffect from "../components/SnowEffect";
import React, { useEffect, useState, useRef } from "react";
import html2canvas from 'html2canvas';

// const ChristmasPage = () => {
  const ChristmasPage = () => {

  const [message, setMessage] = useState(false);

  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const decorationsRef = useRef(null);

  // useEffect(() => {
  //   // You can access the ref here after the component has mounted
  //   console.log(ref);
  // }, [ref]);

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };


  const handleCapture = () => {

  //   html2canvas(document.querySelector('.christmasPage'), {
  //     onrendered: function(canvas) {
  //         document.body.appendChild(canvas);
  //       return Canvas2Image.saveAsPNG(canvas);
  //     }
  // })
    // setMessage(sweetMessage);
    // console.log(message);

    if (decorationsRef.current) {
      html2canvas(decorationsRef.current, ({
        ignoreElements: (element) => {
          return element.classList.contains('ignore-capture');
        },
      })).then((canvas) => {
        const newWindow = window.open('', '_blank');
        newWindow.document.body.appendChild(canvas);
  
        // Use a timeout to open the window after a short delay
        setTimeout(() => {
          newWindow.document.close(); // Close the document to complete loading
          newWindow.focus(); // Bring the window to the foreground
        }, 500);
      });
    }
  };
  

  return (
    <div className="christmasPage" ref={decorationsRef} onDrop={() => console.log("item dropped")} onDragOver={() => {console.log("dragging over")}}>
        <Decorations 
        // ref={decorationsRef} 
        translate={translate} setTranslate={setTranslate} handleDragMove={handleDragMove} />
        <SnowMan />
        <SnowEffect />
        <img className="traineau" src="./images/traineau.webp"></img> 
        {!message &&
        <button type="button" className="captureButton ignore-capture" onClick={() => setMessage(!message)}>Write a sweet message</button>
        }
        {message &&
          <div className="shop message">
            <textarea type="text" className="message" placeholder="Type your sweet message here" style={{width:"80%", height:"90%", resize:"none"}}>

            </textarea>
            <button type="button" className="captureButton ignore-capture" onClick={handleCapture}>Capture your postcard</button>

          </div>
        }
    </div>
  );
};

Decorations.displayName = "Decorations";

export default ChristmasPage;
