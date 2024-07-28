//imports
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  // lets apply Updater Fun ✅ (to queue state updates (not single render))
  function counterIncrement() {
    //Updater Functions:
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
  }

  function counterDecrement() {
    // can be called prev , cause it relies on Prev value not Current value
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  }
  function counterReset() {
    //no need (not realying on prevValue)
    setCounter(0);
  }

  // const cou

  // function counterIncrement() {
  //   setCounter(counter + 1);
  //   //0+1
  //   setCounter(counter + 1);
  //   //0+1
  //   setCounter(counter + 1);
  //   //0+1
  //   //one time render ❌
  // }

  // const counterIncrement = () => setCounter(counter + 1); ❌
  // const counterDecrement = () => setCounter(counter - 1);
  // const counterReset = () => setCounter(0);

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
