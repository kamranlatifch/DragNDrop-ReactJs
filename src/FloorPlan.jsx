// import React, { useState, useRef } from "react";
// import { useDrop } from "react-dnd";
// import Shape from "./Shape";

// const FloorPlan = () => {
//   const [droppedShapes, setDroppedShapes] = useState([
//     { id: 1, shapeType: "Circle", left: 50, top: 50 },
//     { id: 2, shapeType: "Triangle", left: 150, top: 50 },
//     { id: 3, shapeType: "Square", left: 250, top: 50 },
//   ]);

//   const dropRef = useRef(null);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "shape",
//     drop: (item, monitor) => handleDrop(item, monitor),
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   }));

//   const handleDrop = (item, monitor) => {
//     const dropArea = dropRef.current;
//     if (!dropArea) return;

//     const dropAreaRect = dropArea.getBoundingClientRect();
//     const initialOffset = monitor.getInitialClientOffset();
//     const currentOffset = monitor.getClientOffset();

//     const droppedShape = {
//       id: Math.random().toString(36).substr(2, 9),
//       shapeType: item.shapeType,
//       left: currentOffset.x - initialOffset.x - dropAreaRect.left + 20,
//       top: currentOffset.y - initialOffset.y - dropAreaRect.top + 5,
//     };

//     setDroppedShapes((prevShapes) => [...prevShapes, droppedShape]);
//   };

//   const handleDelete = (id) => {
//     setDroppedShapes((prevShapes) =>
//       prevShapes.filter((shape) => shape.id !== id)
//     );
//   };

//   const getFloorPlanStyles = () => {
//     if (isOver) {
//       return {
//         border: "2px dashed gray",
//       };
//     }
//     return {
//       position: "relative",
//     };
//   };

//   return (
//     <div ref={drop(dropRef)} style={getFloorPlanStyles()}>
//       <h2>Floor Plan</h2>
//       <div style={{ position: "relative" }}>
//         {droppedShapes.map((shape) => (
//           <div
//             key={shape.id}
//             style={{
//               position: "absolute",
//               left: shape.left,
//               top: shape.top,
//             }}
//           >
//             <Shape shapeType={shape.shapeType} />
//             <button onClick={() => handleDelete(shape.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FloorPlan;
// FloorPlan.js
import React from "react";
import { useDrop } from "react-dnd";

const FloorPlan = ({ selectedShape }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "shape",
    drop: (item, monitor) => handleDrop(item, monitor),
    canDrop: (item) => canDropShape(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleDrop = (item, monitor) => {
    console.log("Shape dropped:", item.shapeType);
  };

  const canDropShape = (item) => {
    return item.shapeType === selectedShape;
  };

  const getDropAreaStyles = () => {
    if (isOver && canDrop) {
      return {
        border: "2px dashed gray",
      };
    }
    return {};
  };

  return (
    <div
      ref={drop}
      style={{ ...getDropAreaStyles(), width: "100%", height: "500px" }}
    >
      {selectedShape && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {selectedShape}
        </div>
      )}
    </div>
  );
};

export default FloorPlan;
