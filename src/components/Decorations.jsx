import { useState } from "react";
import decorationsList from "./decorationsList";
import DecorationCard from "./DecorationCard";

const Decorations = () => {
  const [boulesFilter, setBoulesFilter] = useState(false);
  const [etoilesFilter, setEtoilesFilter] = useState(false);
  const [extraFilter, setExtraFilter] = useState(false);

  return (
    <div className="decorations">
      <div className="Filter">
        <button
          onClick={() => {
            setBoulesFilter(!boulesFilter);
            setEtoilesFilter(false);
            setExtraFilter(false);
          }}
        >
          Boules
        </button>
        <button
          onClick={() => {
            setEtoilesFilter(!etoilesFilter);
            setBoulesFilter(false);
            setExtraFilter(false);
          }}
        >
          Etoiles
        </button>
        <button
          onClick={() => {
            setExtraFilter(!extraFilter);
            setBoulesFilter(false);
            setEtoilesFilter(false);
          }}
        >
          Extra
        </button>
      </div>
      <div className="decorationsImage">
        {boulesFilter === true &&
          decorationsList
            .filter((decoration) => {
              return decoration.type === "boule";
            })
            .map((decoration) => {
              return (
                <DecorationCard key={decoration.id} decoration={decoration} />
              );
            })}

        {etoilesFilter === true &&
          decorationsList
            .filter((decoration) => {
              return decoration.type === "star";
            })
            .map((decoration) => {
              return (
                <DecorationCard key={decoration.id} decoration={decoration} />
              );
            })}

        {etoilesFilter === true &&
          decorationsList
            .filter((decoration) => {
              return decoration.type === "star";
            })
            .map((decoration) => {
              return (
                <DecorationCard key={decoration.id} decoration={decoration} />
              );
            })}

        {extraFilter === true &&
          decorationsList
            .filter((decoration) => {
              return decoration.type === "extra";
            })
            .map((decoration) => {
              return (
                <DecorationCard key={decoration.id} decoration={decoration} />
              );
            })}

        {extraFilter === false &&
          etoilesFilter === false &&
          boulesFilter === false &&
          decorationsList.map((decoration) => {
            return (
              <DecorationCard key={decoration.id} decoration={decoration} />
            );
          })}
      </div>
    </div>
  );
};

export default Decorations;
