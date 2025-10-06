import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return; // prevent empty input
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TodoList App
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <h3 className="text-center mb-4">My Todo List</h3>

        {/* Input and Add Button */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="list-group">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {t}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
