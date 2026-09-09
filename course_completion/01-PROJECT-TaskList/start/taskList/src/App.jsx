function App() {
  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List With Priority</h1>
        <button className="close-button">+</button>
        <TaskForm></TaskForm>
      </div>
      <div className="task-container">
        <h2>Tasks:</h2>
        <button className="close-button">+</button>
        <div className="sort-controls">
          <button className="sort-button">By Date</button>
          <button className="sort-button">By Priority</button>
        </div>
        <TaskList></TaskList>
      </div>
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button className="close-button">+</button>
        <CompletedTaskList></CompletedTaskList>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

function TaskForm() {
  return (
    <form className="task-form" action="">
      <input type="text" value={""} placeholder="Task title" required />
      <select value={""}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="datetime-local" required value={""} />
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
