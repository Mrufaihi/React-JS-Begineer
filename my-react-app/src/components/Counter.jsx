//imports
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const counterIncrement = () => setCounter(counter + 1);
  const counterDecrement = () => setCounter(counter - 1);
  const counterReset = () => setCounter(0);

  return (
    <div className="counter">
      <h1 className="counter__header">{counter}</h1>
      <button className="counter__button" onClick={counterIncrement}>
        Increment
      </button>
      <button className="counter__button" onClick={counterDecrement}>
        Decrement
      </button>
      <button className="counter__button" onClick={counterReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
