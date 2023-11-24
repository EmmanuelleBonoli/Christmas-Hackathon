import { useState } from "react";
import PropTypes from "prop-types";

export default function DragMove(props) {
  const { children, style, className } = props;

  const [setIsDragging] = useState(false);

  return (
    <div
      style={style}
      className={className}
      onDragOver={() => setIsDragging(false)}
      // onDrop={() => console.log("drop yes")}
    >
      {children}
    </div>
  );
}

DragMove.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

DragMove.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};
