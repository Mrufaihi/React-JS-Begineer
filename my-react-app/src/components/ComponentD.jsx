import { useContext } from 'react';
import { UserContext } from './ComponentA';

// THE CONSUMER COMPONENT
function ComponentD() {
  const user = useContext(UserContext); // useContext to CONSUME, FROM (UserContext) in './ComponmentA' , Store its Value.

  return (
    <div className="box">
      <h1>ComponentD</h1>

      <p>{user}</p>
    </div>
  );
}
export default ComponentD;

/* Props Drilling */
// <p>{props.user}</p>
