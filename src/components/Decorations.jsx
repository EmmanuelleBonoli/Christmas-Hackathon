import { forwardRef, useEffect } from "react";
import PropTypes  from "prop-types";
import DecorationCard from "./DecorationCard";
import decorationsList from "./decorationsList";

const Decorations = ({ translate, setTranslate }) => {

  // useEffect(() => {
  //   // You can access the ref here after the component has mounted
  //   console.log(ref);
  // }, [ref]);

  return (
    <div className="decorations" 
    // ref={ref}
    >
      <div className="shop">
        <div className="decorationsImage">
          {decorationsList.map((decoration) => {
                return (
                  <DecorationCard key={decoration.id} decoration={decoration} translate={translate} setTranslate={setTranslate} />
                );
              })}
        </div>
      </div>
      <div className="sapin">
        <img src="./images/christmasTree2.png"/>
      </div>
    </div>
  );
};

// Decorations.displayName = "Decorations";

Decorations.propTypes = {
  translate: PropTypes.string.isRequired,
  setTranslate: PropTypes.func.isRequired,
};

export default Decorations;