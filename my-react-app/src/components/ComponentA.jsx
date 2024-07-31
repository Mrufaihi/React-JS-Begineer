import { createContext, useState } from 'react';
import ComponentB from './ComponentB';

// THE PROVIDER COMPONENT
export const UserContext = createContext(); //export this constant (descriptive name) to be a provider for children

function ComponentA() {
  const [user, setUser] = useState('Unranked');

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <p>{user}</p>

      {/* use Context we created , specify its the Provider, give it the value we want */}
      <UserContext.Provider value={user}>
        <ComponentB /> {/* the Provided To (Child) -> then to its Children*/}
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;

//   const [user, setUser] = useState('Unranked');
/* Props Drilling */
//        <ComponentB user={user} />
