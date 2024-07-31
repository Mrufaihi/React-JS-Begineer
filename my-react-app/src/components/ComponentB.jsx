import { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext } from './ComponentA';

// THE CONSUMER COMPONENT
function ComponentB() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentB</h1>
      <p>{user}</p>

      <div>
        <ComponentC />
      </div>
    </div>
  );
}
export default ComponentB;

/* Props Drilling */

//  <ComponentC user={props.user} />
