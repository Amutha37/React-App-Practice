import React, { useState } from "react";
import "./Buttoncount.css";

export default function App() {
  let [count, setCount] = useState(0);
  const addCount = () => {
    setCount(++count);
  };
  const resetCount = () => {
    if (count > 0) setCount(0);
  };

  return (
    <div className="counterDisplay">
      <header className="App">
        <h1>Counter</h1>

        <button className="count" onClick={addCount}>
          Add
        </button>
        <div className="displayCount">{count}</div>
        <button className="reset" onClick={resetCount}>
          Reset
        </button>
      </header>
    </div>
  );
}
