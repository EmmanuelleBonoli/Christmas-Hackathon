import React, { forwardRef, useEffect } from "react";
import DecorationCard from "./DecorationCard";
import decorationsList from "./decorationsList";

const Decorations = forwardRef(({ translate, setTranslate }, ref) => {

  useEffect(() => {
    // You can access the ref here after the component has mounted
    console.log(ref);
  }, [ref]);

  return (
    <div className="decorations" ref={ref}>
      <div className="shop ignore-capture">
      <div className="decorationsImage">
        {decorationsList.map((decoration) => {
              return (
                <DecorationCard key={decoration.id} decoration={decoration} translate={translate} setTranslate={setTranslate} />
              );
            })}
      </div>
      </div>
    </div>
  );
});

Decorations.displayName = "Decorations";

export default Decorations;