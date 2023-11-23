import SnowMan from "../components/SnowMan";
import React, { useState, useEffect, useRef } from "react";
import Decorations from "../components/Decorations";
import SnowEffect from "../components/SnowEffect";

const ChristmasPage = () => {
    const audioRef = useRef(null);
  
    const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      };

    const CountdownTrain = () => {
        const [count, setCount] = useState(); 
      
        useEffect(() => {
          const countdownInterval = setInterval(() => {
            if (count > 0) {
              setCount(count - 1);
            } else {
              clearInterval(countdownInterval);
            }
          }, 9);
      
          return () => {
            clearInterval(countdownInterval); // Nettoyer l'intervalle lors du démontage du composant
          };
        }, [count]);
      
        return (
          <div>
            <img className="traineau" src="./images/traineau.webp"></img>
          </div>
        );
      };

    return (
        <div className="christmasPage" onClick={playAudio}>
            <Decorations />
            <SnowMan />
            <SnowEffect onClick={CountdownTrain}/>
            <img className="tree" src="./images/christmasTree.png"></img>
            <CountdownTrain />
            <audio ref={audioRef}>
            <source src="public/sounds/pereNoelSound.mp3" type="audio/mp3" />
            <track kind="captions" />
            </audio>
        </div>
        
       
    );
};

export default ChristmasPage;


