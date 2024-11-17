import React, { useState } from "react";
import Subtask from "./Subtask";

const TaskItem = ({ task, toggleCompletion, deleteTask, addSubtask, toggleSubtaskCompletion }) => {
  const [newSubtask, setNewSubtask] = useState("");

  const handleAddSubtask = () => {
    if (!newSubtask.trim()) return;
    addSubtask(task.id, newSubtask); // Add only the new subtask title
    setNewSubtask("");
  };

  const deleteSubtask = (subtaskIndex) => {
    const updatedSubtasks = task.subtasks.filter((_, index) => index !== subtaskIndex);
    task.subtasks = updatedSubtasks; // Update the task's subtasks
    toggleSubtaskCompletion(task.id, -1); // Trigger a re-render by calling a task-related action
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
            deleteSubtask={() => deleteSubtask(index)} // Pass the index for deletion
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
