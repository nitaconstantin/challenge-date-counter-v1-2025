import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count >= 1
            ? `${count} days from Today is `
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : ""}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
