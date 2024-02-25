// Import Statements
import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS file

// Functional Component
const App = () => {
  // State Variables
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect Hook
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  // Start/Stop Function
  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // Reset Function
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Time Formatting Function
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Render JSX
  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <h3>Time: {formatTime(time)}</h3>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

// Export
export default App;
