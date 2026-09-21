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

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  const activeTasks = tasks.filter((task) => !task.completed);

  const completedTasks = tasks.filter((task) => task.completed);

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
        {openSection.tasks && (
          <TaskList
            completeTask={completeTask}
            deleteTask={deleteTask}
            activeTasks={activeTasks}
          ></TaskList>
        )}
      </div>
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button
          onClick={() => toggleSection("completed")}
          className={`close-button ${openSection.completed ? "open" : ""}`}
        >
          +
        </button>
        {openSection.completed && (
          <CompletedTaskList
            deleteTask={deleteTask}
            completedTasks={completedTasks}
          ></CompletedTaskList>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim()) {
      addTask({ title, priority: priority, deadline });
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
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
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

function TaskList({ activeTasks, deleteTask, completeTask }) {
  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem
          deleteTask={deleteTask}
          completeTask={completeTask}
          task={task}
          key={task.id}
        />
      ))}
    </ul>
  );
}

function TaskItem({ task, deleteTask, completeTask }) {
  const { title, priority, deadline, id, completed } = task;

  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} <strong>{priority}</strong>
        </div>
        <div className="tasl-deadline">Due: {Date(deadline)}</div>
      </div>
      <div className="task-buttons">
        {!completed ? (
          <button onClick={() => completeTask(id)} className="complete-button">
            Complete
          </button>
        ) : (
          ""
        )}

        <button onClick={() => deleteTask(id)} className="delete-button">
          Delete
        </button>
      </div>
    </li>
  );
}

function CompletedTaskList({ completedTasks, deleteTask }) {
  return (
    <ul className="completed-task-list">
      {completedTasks.map((item) => (
        <TaskItem deleteTask={deleteTask} key={item.id} task={item}></TaskItem>
      ))}
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
