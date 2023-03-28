import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onPlus = () => {
    setCount((count) => count + 1);
  };
  const onMinus = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onMinus}>-1</button>
      <button onClick={onPlus}>+1</button>
    </div>
  );
}

export default App;
