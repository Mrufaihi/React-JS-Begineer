import { useState } from 'react';

function StateHook() {
  const [name, setName] = useState('Guest'); // needs [variable, setVariable] = useState(default)
  const nameClick = () => setName('Unranked');

  const [age, setAge] = useState(0);
  const ageClick = () => setAge(age + 1);

  const [isEmployed, setIsEmployed] = useState(false);
  const isEmployedClick = () => setIsEmployed(!isEmployed);

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={nameClick}>Update</button>
      <p>Age: {age}</p>
      <button onClick={ageClick}>Update</button>
      <p>Employed? {isEmployed ? 'Yes' : 'No'}</p>
      <button onClick={isEmployedClick}>Update</button>
    </>
  );
}

export default StateHook;
