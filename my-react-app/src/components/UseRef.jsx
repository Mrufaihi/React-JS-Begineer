//USE REF

import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

function UseRef() {
  //   this will rerender every time the button is clicked for no reason!
  useEffect(() => {
    console.log('Rerendered!');
  }); //every time Whole component renders, excute this code

  //   Ever Input Got its own Ref
  let inputRef1 = useRef(null); //numberRef is now the useRef object, it contains 1 property (.current)
  let inputRef2 = useRef(null); //numberRef is now the useRef object, it contains 1 property (.current)
  let inputRef3 = useRef(null); //numberRef is now the useRef object, it contains 1 property (.current)

  //   which each click, FOCUS , Change Color, Reset Others.
  function handleClickInput1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = 'yellow';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleClickInput2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = 'green';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleClickInput3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = 'blue';
  }

  return (
    <div>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClickInput1}>Click me</button>

      <input type="text" ref={inputRef2} />
      <button onClick={handleClickInput2}>Click me</button>

      <input type="text" ref={inputRef3} />
      <button onClick={handleClickInput3}>Click me</button>
    </div>
  );
}
export default UseRef;

//USE REF (Unoptimized)

// function UseRef() {
//   const [number, setNumber] = useState(0);

//   function handleCountClick() {
//     setNumber((n) => n + 1);
//   }

// //   this will rerender every time the button is clicked for no reason!
//   useEffect(() => console.log('Rerendered!')); //every time Whole component renders, excute this code

//   return (
//     <div>
//       {/* <input type="text" /> */}
//       <button onClick={handleCountClick}>Click me</button>
//       <h1>count: {number}</h1>
//     </div>
//   );
// }

//USE REF (optimized)

// function UseRef() {
//     //   this will rerender every time the button is clicked for no reason!
//     useEffect(() => console.log('Rerendered!')); //every time Whole component renders, excute this code

//     let numberRef = useRef(0); //numberRef is now the useRef object, it contains 1 property (.current)

//     function handleCountClick() {
//       numberRef.current++; //just like setNumber n + 1.

//       console.log(numberRef.current);
//     }

//     return (
//       <div>
//         {/* <input type="text" /> */}
//         <button onClick={handleCountClick}>Click me</button>
//       </div>
//     );
//   }
