import throwSnowball from "./snowBall";

const SnowMan = () => {
    return (
        <div>
            <div id="snowball" className="snowball">
                <img src="./images/snowBall.png"/>
            </div>
            <div id="target" className="target" onClick={throwSnowball}>
                <img src="./images/snowManHide2.png"/>
            </div>
        </div>
    );
};

export default SnowMan;