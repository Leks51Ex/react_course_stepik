import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  // function handleClick() {
  //   alert("hello");
  // }

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      {isOpen ? (
        <span onClick={toggleIsOpen} className="cross">
          &times;
        </span>
      ) : (
        <button onClick={toggleIsOpen}>Начать</button>
      )}

      {isOpen && (
        <>
          <h1>Vite + React = {count >= 3 ? "Love" : ""}</h1>

          <div className="logo-container">
            <img
              className={`logo ${count >= 1 ? "active" : ""}`}
              src="/vite.svg"
              alt=""
            />
            <p>+</p>
            <img
              className={`logo ${count >= 2 ? "active" : ""}`}
              src="/react.svg"
              alt=""
            />
            <p>=</p>
            <img
              className={`logo ${count >= 3 ? "active" : ""}`}
              src="/love.svg"
              alt=""
            />
          </div>

          <hr />

          <div className="card">
            <p className="count-paragraph">count is {count}</p>
            <div className="increment-buttons">
              <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
              <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
