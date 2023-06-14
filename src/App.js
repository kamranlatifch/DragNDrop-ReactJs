// // App.js
// import React, { useState } from "react";
// import FloorPlan from "./FloorPlan";
// import Shape from "./Shape";

// const App = () => {
//   const [selectedShape, setSelectedShape] = useState(null);

//   const handleShapeSelect = (shapeType) => {
//     setSelectedShape(shapeType);
//   };

//   return (
//     <div className="App">
//       <div style={{ display: "flex", gap: "10px" }}>
//         <Shape shapeType="Circle" onClick={handleShapeSelect} />
//         <Shape shapeType="Triangle" onClick={handleShapeSelect} />
//         <Shape shapeType="Square" onClick={handleShapeSelect} />
//       </div>
//       <FloorPlan selectedShape={selectedShape} />
//     </div>
//   );
// };

// export default App;
import React from "react";
import Shape from "./Shape";
import ImageArea from "./ImageArea";

const App = () => {
  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("text/plain", type);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <Shape
          type="circle"
          handleDragStart={(event) => handleDragStart(event, "circle")}
        />
        <Shape
          type="triangle"
          handleDragStart={(event) => handleDragStart(event, "triangle")}
        />
        <Shape
          type="square"
          handleDragStart={(event) => handleDragStart(event, "square")}
        />
      </div>
      <ImageArea />
    </div>
  );
};

export default App;
