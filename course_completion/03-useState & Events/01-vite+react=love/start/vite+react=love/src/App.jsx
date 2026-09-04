import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState(null);

  function handleMouseEnter(item) {
    setActiveItem(item);
  }

  function handleMouseLeave() {
    setActiveItem(null);
  }

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
              onMouseEnter={() => handleMouseEnter("vite")}
              onMouseLeave={handleMouseLeave}
              className={`logo ${
                count >= 1 || activeItem === "vite" ? "active" : ""
              }`}
              src="/vite.svg"
              alt=""
            />
            <p>+</p>
            <img
              onMouseEnter={() => handleMouseEnter("react")}
              onMouseLeave={handleMouseLeave}
              className={`logo ${
                count >= 2 || activeItem === "react" ? "active" : ""
              }`}
              src="/react.svg"
              alt=""
            />
            <p>=</p>
            <img
              onMouseEnter={() => handleMouseEnter("love")}
              onMouseLeave={handleMouseLeave}
              className={`logo ${
                count >= 3 || activeItem === "love" ? "active" : ""
              }`}
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
