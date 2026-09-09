import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [openSection, setOpenSection] = useState({
    taskList: false,
    tasks: true,
    completed: true,
  });

  function toggleSection(section) {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  console.log(tasks);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List With Priority</h1>
        <button
          onClick={() => toggleSection("taskList")}
          className={`close-button ${openSection.taskList ? "open" : ""}`}
        >
          +
        </button>
        {openSection.taskList && <TaskForm addTask={addTask}></TaskForm>}
      </div>
      <div className="task-container">
        <h2>Tasks:</h2>
        <button
          onClick={() => toggleSection("tasks")}
          className={`close-button ${openSection.tasks ? "open" : ""}`}
        >
          +
        </button>

        <div className="sort-controls">
          <button className="sort-button">By Date</button>
          <button className="sort-button">By Priority</button>
        </div>
        {openSection.tasks && <TaskList></TaskList>}
      </div>
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button
          onClick={() => toggleSection("completed")}
          className={`close-button ${openSection.completed ? "open" : ""}`}
        >
          +
        </button>
        {openSection.completed && <CompletedTaskList></CompletedTaskList>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priorioty, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim()) {
      addTask({ title, priorioty, deadline });
      setTitle("");
      setPriority("Low");
      setDeadline("");
    }
  }

  return (
    <form className="task-form" action="" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        placeholder="Task title"
        required
      />
      <select onChange={(e) => setPriority(e.target.value)} value={priorioty}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        onChange={(e) => setDeadline(e.target.value)}
        type="datetime-local"
        value={deadline}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

function TaskList() {
  return (
    <ul className="task-list">
      <TaskItem />
    </ul>
  );
}

function TaskItem() {
  return (
    <li className="task-item high">
      <div className="task-info">
        <div>
          Title <strong>Medium</strong>
        </div>
        <div className="tasl-deadline">Due: {new Date().toLocaleString()}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button">Complete</button>
        <button className="delete-button">Delete</button>
      </div>
    </li>
  );
}

function CompletedTaskList() {
  return (
    <ul className="completed-task-list">
      <TaskItem></TaskItem>
    </ul>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: React, JSX, props, useState,
        component composition, conditional rendering, array methods (map,
        filter), event handling.
      </p>
    </footer>
  );
}
