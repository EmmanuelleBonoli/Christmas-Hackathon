import { useState } from "react";
import SnowMan from "../components/SnowMan";
import Decorations from "../components/Decorations";
import Tree from "../components/Tree";
import DragMove from "../components/DragMove";

const ChristmasPage = () => {

    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
      });
    
      const handleDragMove = (e) => {
        setTranslate({
          x: translate.x + e.movementX,
          y: translate.y + e.movementY
        });
      };

    return (
        <div className="shop">
            <DragMove onDragMove={handleDragMove}>
                <div className="boule1"
                    style={{
                        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
                    }}
                >
                    <img src="./images/boule1.png" className="App-logo" alt="logo" />
                </div>
            </DragMove>
            <DragMove onDragMove={handleDragMove}> 
                <div className="boule2"
                    style={{
                        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
                    }}
                >
                    <img src="./images/boule2.png" className="App-logo" alt="logo" />
                </div>
            </DragMove>
            <DragMove onDragMove={handleDragMove}>
                <div className="boule3"
                    style={{
                        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
                    }}
                >
                    <img src="./images/boule3.png" className="App-logo" alt="logo" />
                </div>
            </DragMove>
            <Tree handleDragMove={handleDragMove}/>
            {/* <Decorations />
            <SnowMan /> */}
            {/* <Tree handleDragMove={handleDragMove}/> */}
        </div>
    );
};

export default ChristmasPage;