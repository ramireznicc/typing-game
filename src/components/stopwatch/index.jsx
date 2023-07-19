import { useState, useEffect } from "react";

import "./styles.css";

function Stopwatch({ isRunning }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalTime) => {
    const minutes = Math.floor(totalTime / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalTime % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2 className={"stopwatch" + (isRunning ? " started" : "")}>
        {formatTime(counter)}
      </h2>
    </div>
  );
}

export default Stopwatch;
