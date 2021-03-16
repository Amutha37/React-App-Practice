import React, { useState } from "react";
import NewTask from "./AddTask";
import TasksList from "./TaskList";
import "./styles.css";

export default function App() {
  // hook your code up here ;)
  const [newTask, setNewTask] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
      id: Date.now(),
    }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
