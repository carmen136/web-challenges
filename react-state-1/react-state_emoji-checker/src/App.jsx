import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  
  function handleClick(emoji) {
    console.log(emoji);
    setCode(code + emoji);
  }

  function resetCode() {
    setCode("");
    console.log("Reset Code!");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => handleClick("🐡")}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleClick("🐋")}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleClick("🐠")}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={resetCode}
      >
        Reset
      </button>
      <p>Current code: {code}</p>
      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}

