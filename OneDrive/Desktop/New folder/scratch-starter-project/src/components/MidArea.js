import React from "react";
import './MidArea.css'; // Import the CSS file

export default function MidArea({ movements, onDrop, moveSteps, rotate }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const movement = JSON.parse(e.dataTransfer.getData("movement"));
    onDrop(movement);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleClick = (movement) => {
    if (movement.type === "move") {
      moveSteps(movement.steps);
    } else if (movement.type === "rotate") {
      rotate(movement.degrees);
    }
  };

  return (
    <div
      className="mid-area" // Apply the mid-area class
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="mid-area-title">Mid Area</div>
      <div className="movement-list"> {/* Use a class for movement list */}
        {movements.map((movement, index) => (
          <div
            key={index}
            onClick={() => handleClick(movement)}
            className="movement-button" // Apply button class
          >
            {movement.type === "move" && `Move ${movement.steps} steps`}
            {movement.type === "rotate" &&
              `Turn ${movement.degrees > 0 ? "Right" : "Left"} ${Math.abs(movement.degrees)} degrees`}
          </div>
        ))}
      </div>
    </div>
  );
}
