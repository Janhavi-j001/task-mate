import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import "../styles/styles.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("General");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      dueDate: dueDate,
      category: category,
      completed: false,
      subtasks: [],
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setDueDate("");
    setCategory("General");
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

  const addSubtask = (id, subtaskTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, subtasks: [...task.subtasks, { title: subtaskTitle, completed: false }] }
          : task
      )
    );
  };

  const toggleSubtaskCompletion = (taskId, subtaskIndex) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask, index) =>
                index === subtaskIndex
                  ? { ...subtask, completed: !subtask.completed }
                  : subtask
              ),
            }
          : task
      )
    );
  };

  return (
    <div className={darkMode ? "container dark-mode" : "container"}>
      <h1>Task Manager</h1>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="task-form">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
            addSubtask={addSubtask}
            toggleSubtaskCompletion={toggleSubtaskCompletion}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
