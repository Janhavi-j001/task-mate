import React from "react";

const Subtask = ({ subtask, toggleSubtaskCompletion, deleteSubtask }) => {
  return (
    <div className={`subtask ${subtask.completed ? "completed" : ""}`}>
      <p>{subtask.title}</p>
      <div className="subtask-actions">
        <button onClick={toggleSubtaskCompletion}>
          {subtask.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={deleteSubtask}>Delete</button>
      </div>
    </div>
  );
};

export default Subtask;
