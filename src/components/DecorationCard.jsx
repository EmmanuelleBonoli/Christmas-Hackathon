import { useState } from "react";


const DecorationCard = ({ decoration, translate, setTranslate }) => {

  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const [initialXPosition, setInitialXPostion] = useState(null)
  const [initialYPosition, setInitialYposition] = useState(null)

  return (
    <div className="decorationCard" draggable onDragStart={(e) => {setInitialXPostion(e.clientX); setInitialYposition(e.clientY)}} onDragEnd={(e) => {setPositionX(positionX + (e.clientX - initialXPosition)), setPositionY(positionY + (e.clientY - initialYPosition))}}>
      <img
        src={decoration.url}
        alt=""
        style={{
          transform: `translateX(${positionX}px) translateY(${positionY}px)`,
        }}
      />
    </div>
  );
};

export default DecorationCard;
