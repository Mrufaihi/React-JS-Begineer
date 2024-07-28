// Explain this function in simple terms:

import { useState } from 'react';

function CarObject() {
  const [car, setCar] = useState({
    name: 'Victoria',
    model: 2006,
    maker: 'ford',
  });

  function handleNameChange(e) {
    // ...prevCar to copy prev obj. else other properties will be removed
    setCar((prevCar) => ({ ...prevCar, name: e.target.value })); //LETS SET UPDATER FUN
  }
  function handleModelChange(e) {
    // ...prevCar to copy prev obj. else other properties will be removed
    setCar((c) => ({ ...c, model: e.target.value })); //LETS SET UPDATER FUN
  }
  function handleMakerChange(e) {
    // ...prevCar to copy prev obj. else other properties will be removed
    setCar((c) => ({ ...c, maker: e.target.value })); //LETS SET UPDATER FUN
  }

  return (
    <div>
      <input type="text" onChange={handleNameChange} placeholder="name" />
      <input type="number" onChange={handleModelChange} placeholder="model" />
      <input type="text" onChange={handleMakerChange} placeholder="maker" />
      <p>
        Your car is a Beatiful: {car.name} {car.model} {car.maker}
      </p>
    </div>
  );
}
export default CarObject;
