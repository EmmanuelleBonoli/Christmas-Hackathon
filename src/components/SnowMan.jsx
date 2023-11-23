import { useEffect, useState } from "react";
import snowMenList from "./snowMenList";

function SnowMan() {
  const [urlSnowMen, setUrlSnowMen] = useState("");

  useEffect(() => {
    const rand = Math.floor(Math.random() * 20);
    const apparitionSnowMen = setInterval(() => {
      const indexSnowMenRandom = Math.floor(Math.random() * 5);
      setUrlSnowMen(snowMenList[indexSnowMenRandom].url);
    }, rand * 1000);
    return () => clearInterval(apparitionSnowMen);
  }, []);

  return (
    <div className="snowMan">
      <img className="snowmen" src={urlSnowMen} alt="snowMan" />
    </div>
  );
}

export default SnowMan;
