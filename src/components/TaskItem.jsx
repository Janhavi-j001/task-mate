import React from "react";

const TaskItem = ({ task, toggleCompletion, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <p>Priority: {task.priority}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleCompletion(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
