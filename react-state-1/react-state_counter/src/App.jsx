import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count +1);
  }

  function decrease() {
    setCount(count -1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={decrease}
        >
          -
        </button>
        <button
          type="button"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
}

