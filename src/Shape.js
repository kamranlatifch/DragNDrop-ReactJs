// import React from "react";
// import { useDrag } from "react-dnd";

// const Shape = ({ shapeType }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "shape",
//     item: { shapeType },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   const getShapeStyles = () => {
//     if (isDragging) {
//       return {
//         opacity: 0.5,
//         cursor: "move",
//       };
//     }
//     return {
//       cursor: "move",
//     };
//   };

//   return (
//     <div ref={drag} style={getShapeStyles()}>
//       <div>{shapeType}</div>
//     </div>
//   );
// };

// export default Shape;
import React from "react";

const Shape = ({ type, handleDragStart }) => {
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor:
          type === "circle" ? "red" : type === "triangle" ? "blue" : "green",
        margin: "10px",
        cursor: "move",
      }}
    ></div>
  );
};

export default Shape;
