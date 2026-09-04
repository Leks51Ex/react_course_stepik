import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // function handleClick() {
  //   alert("hello");
  // }

  return (
    <>
      <h1>Vite + React = Love</h1>

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
  );
}

export default App;
