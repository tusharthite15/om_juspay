import React from "react";
import Icon from "./Icon";

function MotionButton({ onClick, children, movement }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("movement", JSON.stringify(movement));
  };

  return (
    <div
      draggable
      onClick={onClick}
      onDragStart={handleDragStart}
      className="flex flex-row flex-wrap bg-blue-500 text-white w-[300px] px-2 py-1 my-2 text-sm cursor-pointer rounded hover:bg-blue-600"
    >
      {children}
    </div>
  );
}

export default function Sidebar({ moveSteps, rotate }) {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold mb-2">{"Motion"}</div>

      <MotionButton
        onClick={() => moveSteps(10)}
      >
        {"Move 10 steps"}
      </MotionButton>

      <MotionButton
        onClick={() => rotate(-15)}
        movement={{ type: "rotate", degrees: -15, className: "bg-blue-500 text-white w-100 px-2 py-1 my-2 text-sm cursor-pointer rounded" }}
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </MotionButton>

      <MotionButton
        onClick={() => rotate(15)}
        movement={{ type: "rotate", degrees: 15, className: "bg-blue-500 text-white w-[300px] px-2 py-1 my-2 text-sm cursor-pointer rounded" }}
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </MotionButton>
    </div>
  );
}
