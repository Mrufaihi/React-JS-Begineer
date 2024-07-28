import { useState } from 'react';

function FruitArray() {
  const [fruits, setFruits] = useState(['Apple', 'Orange', 'Mango']);

  function handleAddFruit() {
    const inputFruit = document.getElementById('addFruit').value; //get value of input
    setFruits((f) => [...f, inputFruit]); //add value to setFruits[]

    document.getElementById('addFruit').value = ''; //reset value of input
  }

  function handleRemoveFruit(index) {
    setFruits((prevFruit) => prevFruit.filter((_, i) => i !== index)); //Updater Fun => use prev array | _ to ignore args
    // simpler:  setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <div>
      <ol>
        {fruits.map((fruit, index) => (
          <li onClick={() => handleRemoveFruit(index)} key={index}>
            {fruit}
          </li>
        ))}
      </ol>
      <input type="text" placeholder="fruit.." id="addFruit" />
      <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  );
}

export default FruitArray;
