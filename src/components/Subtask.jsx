import React from "react";

const Subtask = ({ subtask, toggleSubtaskCompletion }) => {
  return (
    <div className={`subtask ${subtask.completed ? "completed" : ""}`}>
      <p>{subtask.title}</p>
      <button onClick={toggleSubtaskCompletion}>
        {subtask.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default Subtask;
