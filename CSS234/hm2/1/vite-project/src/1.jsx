import { useState, useEffect } from 'react';
import './App.css';

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

function ToggleButton({ isRunning, onToggle }) {
  return <button onClick={onToggle}>{isRunning ? 'Pause' : 'Resume'}</button>;
}

function App() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  function resetTime() {
    setTimeLeft(10);
  }

  function toggleIsRunning() {
    setIsRunning(isRunning => !isRunning);
  }

  return (
    <>
      <h1>Time left: {timeLeft} seconds</h1>
      <ResetButton onReset={resetTime} />
      <ToggleButton isRunning={isRunning} onToggle={toggleIsRunning} />
    </>
  );
}

export default App;
