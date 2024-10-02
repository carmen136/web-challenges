import "./styles.css";
import { useState } from "react";  // import {useState}

export default function App() {
  const [isActiveColor, setisActiveColor] = useState(false);

  const [isActiveText, setisActiveText] = useState(false);

  function handleClick() {
    setisActiveColor(!isActiveColor);
    setisActiveText(!isActiveText);
    // Check that the value changes correctly.
    console.log(isActiveColor);
  }

  return (
    <main>
      <div className={`box ${isActiveColor ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActiveText ? "Activate" : "Deactivate"} </button>
    </main>
  );
}

