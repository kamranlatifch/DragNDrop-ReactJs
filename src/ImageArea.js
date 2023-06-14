import React, { useState, useRef } from "react";

const ImageArea = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const imageAreaRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const shapeType = event.dataTransfer.getData("text/plain");
    const shape = { type: shapeType, x: event.clientX, y: event.clientY };
    setShapes([...shapes, shape]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleShapeMouseDown = (event, index) => {
    event.stopPropagation();
    setSelectedShape(index);
  };

  const handleImageAreaClick = () => {
    setSelectedShape(null);
  };

  const handleImageAreaMouseMove = (event) => {
    if (selectedShape !== null) {
      const updatedShapes = [...shapes];
      updatedShapes[selectedShape].x = event.clientX;
      updatedShapes[selectedShape].y = event.clientY;
      setShapes(updatedShapes);
    }
  };

  const handleDeleteShape = (event, index) => {
    event.stopPropagation();
    const updatedShapes = [...shapes];
    updatedShapes.splice(index, 1);
    setShapes(updatedShapes);
    setSelectedShape(null);
  };
  console.log(shapes);
  return (
    <div
      ref={imageAreaRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleImageAreaClick}
      onMouseMove={handleImageAreaMouseMove}
      style={{
        width: "500px",
        height: "500px",
        border: "1px solid black",
        margin: "10px",
        position: "relative",
      }}
    >
      {shapes.map((shape, index) => {
        const imageAreaRect = imageAreaRef.current.getBoundingClientRect();
        const leftOffset = shape.x - imageAreaRect.left - 25;
        const topOffset = shape.y - imageAreaRect.top - 25;

        return (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor:
                shape.type === "circle"
                  ? "red"
                  : shape.type === "triangle"
                  ? "blue"
                  : "green",
              borderRadius: shape.type === "circle" ? "50%" : "0",
              position: "absolute",
              left: `${leftOffset}px`,
              top: `${topOffset}px`,
              cursor: "move",
              zIndex: selectedShape === index ? 1 : "auto",
            }}
            onMouseDown={(event) => handleShapeMouseDown(event, index)}
          >
            {selectedShape === index && (
              <button
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={(event) => handleDeleteShape(event, index)}
              >
                X
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageArea;
