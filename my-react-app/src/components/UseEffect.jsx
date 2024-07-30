import { useEffect, useState } from 'react';

function UseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //   this will excute 1000+ times
  //   window.addEventListener('resize', handleResize);
  //    console.log('added event listener');

  // only excutes once when(mounts)
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('added event listener');

    // when we are done with this then clean up or remove eventListener
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('removed event listener');
    };
  }, []);

  //   when widthxheight change , then change title
  useEffect(() => {
    document.title = `${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <h1>Windows Resize</h1>
      <h2>Width: {width}px</h2>
      <h2>Height: {height}px</h2>
    </div>
  );
}
export default UseEffect;

// UPDATE TITLE WITH COUNT
//   const [count, setCount] = useState(0);
//   function handleCountClick() {
//     setCount((c) => c + 1);
//   }
//   useEffect(() => {
//     document.title = `Count title: ${count}`;
//   }, [count]);
