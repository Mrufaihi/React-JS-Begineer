import { useContext } from 'react';
import ComponentD from './ComponentD';
import { UserContext } from './ComponentA';

// THE CONSUMER COMPONENT
function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <p>{user}</p>

      <div>
        <ComponentD />
      </div>
    </div>
  );
}
export default ComponentC;

/* Props Drilling */

//  <ComponentD user={props.user} />
