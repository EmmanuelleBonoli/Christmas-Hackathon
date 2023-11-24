import PropTypes from "prop-types";
import { useState, useRef } from "react";

const DecorationCard = ({ decoration }) => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [initialXPosition, setInitialXPostion] = useState(null);
  const [initialYPosition, setInitialYposition] = useState(null);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleClick = () => {
    if (decoration.id === 8) {
      // Vérifier si l'ID de la décoration est égal à 8
      playAudio(); // Déclencher la lecture audio
    }
  };

  return (
    <div
      className="decorationCard"
      draggable
      onDragStart={(e) => {
        setInitialXPostion(e.clientX);
        setInitialYposition(e.clientY);
      }}
      onDragEnd={(e) => {
        setPositionX(positionX + (e.clientX - initialXPosition)),
          setPositionY(positionY + (e.clientY - initialYPosition));
      }}
    >
      <img
        onClick={handleClick}
        src={decoration.url}
        alt=""
        style={{
          transform: `translateX(${positionX}px) translateY(${positionY}px)`,
        }}
      />
      <audio ref={audioRef}>
        <source src="./sounds/ho.mp3" type="audio/mp3" />
        <track kind="captions" />
      </audio>
    </div>
  );
};

DecorationCard.propTypes = {
  decoration: PropTypes.object.isRequired,
};

export default DecorationCard;
