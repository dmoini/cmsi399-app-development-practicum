import React, { useState } from "react";
import Button from "./Button.js";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Button name="UP" action={increment} />
      <Button name="RESET" action={reset} />
      <Button name="DOWN" action={decrement} />
      <h2>{count}</h2>
    </div>
  );
}
