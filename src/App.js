import { useState } from "react";

function App() {
  const date = new Date();
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  date.setDate(date.getDate() + counter);

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </div>
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter >= 1
            ? `${counter} day from today is `
            : counter < 0
            ? `${counter} day ago was `
            : ""}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
