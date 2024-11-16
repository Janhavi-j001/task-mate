import React, { useState } from "react";
import Subtask from "./Subtask";

const TaskItem = ({ task, toggleCompletion, deleteTask, addSubtask, toggleSubtaskCompletion }) => {
  const [newSubtask, setNewSubtask] = useState("");

  const handleAddSubtask = () => {
    if (!newSubtask.trim()) return;
    addSubtask(task.id, newSubtask);
    setNewSubtask("");
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <p>Due: {task.dueDate || "No due date"}</p>
        <p>Category: {task.category}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleCompletion(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      <div className="subtasks">
        {task.subtasks.map((subtask, index) => (
          <Subtask
            key={index}
            subtask={subtask}
            toggleSubtaskCompletion={() => toggleSubtaskCompletion(task.id, index)}
          />
        ))}
        <input
          type="text"
          placeholder="Add a subtask"
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
        />
        <button onClick={handleAddSubtask}>Add Subtask</button>
      </div>
    </div>
  );
};

export default TaskItem;
