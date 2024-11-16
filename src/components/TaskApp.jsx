import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import "../styles/styles.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Persist tasks in localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      completed: false,
      priority: priority,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setPriority("Medium");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortTasks = (criteria) => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (criteria === "priority") {
        const order = ["High", "Medium", "Low"];
        return order.indexOf(a.priority) - order.indexOf(b.priority);
      } else if (criteria === "completion") {
        return a.completed - b.completed;
      }
      return 0;
    });
    setTasks(sortedTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="task-form">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="sorting-options">
        <button onClick={() => sortTasks("priority")}>Sort by Priority</button>
        <button onClick={() => sortTasks("completion")}>Sort by Completion</button>
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
