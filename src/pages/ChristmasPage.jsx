import SnowMan from "../components/SnowMan";
import Decorations from "../components/Decorations";
import SnowEffect from "../components/SnowEffect";
import { useState } from "react";

const ChristmasPage = () => {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  return (
      <div className="christmasPage" onDrop={() => console.log("item dropped")} onDragOver={() => {console.log("dragging over")}}>
        <Decorations translate={translate} setTranslate={setTranslate} handleDragMove={handleDragMove} />
        <SnowMan />
        <SnowEffect />
            <img className="tree" src="./images/christmasTree.png"></img>
            <img className="traineau" src="./images/traineau.webp"></img> 
      </div>
  );
};

export default ChristmasPage;
