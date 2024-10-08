import ColoredNumber from "./ColoredNumber";
import { useState } from "react";


export default function Counter() {
  const [count, setCount ] = useState(50);

  function Increase() {
    setCount(count + 10);
    console.log(count);
  }

  function Decrease() {
    setCount(count - 10);
  }


  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button onClick={Increase}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button onClick={Decrease}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
