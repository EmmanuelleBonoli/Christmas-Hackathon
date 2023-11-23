import SnowMan from "../components/SnowMan";
import Decorations from "../components/Decorations";
import Tree from "../components/Tree";
import SnowEffect from "../components/SnowEffect";

const ChristmasPage = () => {
    return (
        <div className="christmasPage">
            <Decorations />
            <SnowMan />
            <Tree />
            <SnowEffect />
            <img className="tree" src="./images/christmasTree.png"></img>
            <img className="traineau" src="./images/traineau.webp"></img> 
        </div>
       
    );
};

export default ChristmasPage;
