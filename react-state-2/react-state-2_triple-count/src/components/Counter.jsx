import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // bei jedem Aufruf von setCount wird eine Funktion übergeben, die prevCount als Argument verwendet.
    // prevCount repräsentiert den vorherigen Zustand des Zählers
    // inerhalb jeder Funktion wird prevCount + 1 zurückgegeben -> der Zähler wird um 1 erhöht
    // (man könnte für prevCount auch einen anderen Namen verwenden)
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
