import Counter from "./components/Counter";
import Button from "./components/Button";
import { useState } from "react";
import "./styles/Counter.css";
import "./App.css";

function App() {
  const [numClics, setnumClics] = useState(0);

  const clickHandler = () => {
    setnumClics(numClics + 1);
  };

  const substractNumber = () => {
    setnumClics(numClics - 1);
  };

  const restartCounter = () => {
    setnumClics(0);
  };

  return (
    <div className="App">
      <Counter numClics={numClics} />
      <Button
        text="Add number"
        buttonClick={true}
        handlerClick={clickHandler}
      />

      <Button
        text="Rest number"
        buttonclick={false}
        handlerClick={substractNumber}
      />
      <Button
        text="Restart counter"
        buttonclick={false}
        handlerClick={restartCounter}
      />
    </div>
  );
}

export default App;
