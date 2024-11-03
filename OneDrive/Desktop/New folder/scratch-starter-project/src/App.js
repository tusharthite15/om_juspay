import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [position, setPosition] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [movements, setMovements] = useState([]);

  const moveSteps = (steps) => {
    setPosition((prevPosition) => prevPosition + steps);
  };

  const rotate = (degrees) => {
    setRotation((prevRotation) => prevRotation + degrees);
  };
  const handleDrop = (movement) => {
    setMovements((prevMovements) => [...prevMovements, movement]);
  };
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar moveSteps={moveSteps} rotate={rotate} />
          <MidArea
        movements={movements}
        onDrop={handleDrop}
        moveSteps={moveSteps}
        rotate={rotate}
      />
          </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea position={position} rotation={rotation} />
        </div>
      </div>
    </div>
  );
}
