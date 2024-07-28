import { useState } from 'react';

function CarArrayOfObj() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState('');
  const [carMaker, setCarMaker] = useState('');

  function handleYearChange(e) {
    setCarYear(e.target.value); //set cars name to current input value
  }
  function handleModelChange(e) {
    setCarModel(e.target.value); //set cars name to current input value
  }
  function handleMakerChange(e) {
    setCarMaker(e.target.value); //set cars name to current input value
  }

  function handleAddCar() {
    const newCar = { carYear, carModel, carMaker }; //storing values of inputs in object
    setCars((c) => [...c, newCar]); // spread prev array , add new object

    // reset value after adding
    setCarYear(new Date().getFullYear());
    setCarModel('');
    setCarMaker('');
  }

  function handleRemoveCar(index) {
    // get index of list item clicked
    setCars((c) => c.filter((_, i) => index !== i)); // IF index of item clicked | IS found by filter index | THEN skip it.
  }

  return (
    <div>
      <h2>List of Cars</h2>
      <ol>
        {cars.map((car, index) => (
          // () => handleRemoveCar(index) | we use arrow fun here so it dont gets called immeiditly
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.carYear}, {car.carModel}, {car.carMaker}
          </li>
        ))}
      </ol>
      <input
        value={carYear}
        type="number"
        placeholder="enter Year.."
        onChange={handleYearChange}
      />
      <br />
      <input
        value={carModel}
        type="text"
        placeholder="enter Model .."
        onChange={handleModelChange}
      />
      <br />
      <input
        value={carMaker}
        type="text"
        placeholder="enter Maker.."
        onChange={handleMakerChange}
      />
      <br />

      <p>
        Current Car: {carYear} - {carModel} - {carMaker}
      </p>

      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
export default CarArrayOfObj;
