import PropTypes from "prop-types";
import DecorationCard from "./DecorationCard";
import decorationsList from "./decorationsList";

const Decorations = ({ translate, setTranslate }) => {
  return (
    <div className="decorations">
      <div className="shop">
        <div className="decorationsImage">
          {decorationsList.map((decoration) => {
            return (
              <DecorationCard
                key={decoration.id}
                decoration={decoration}
                translate={translate}
                setTranslate={setTranslate}
              />
            );
          })}
        </div>
      </div>
      <div className="sapin">
        <img src="./images/christmasTree2.png" />
      </div>
    </div>
  );
};

Decorations.propTypes = {
  translate: PropTypes.object.isRequired,
  setTranslate: PropTypes.func.isRequired,
};

export default Decorations;
