function Button() {
  //vars
  const handleClick = (e) => (e.target.textContent = 'Ouch! 🤔');

  return (
    <div>
      {/* when using Fun with args, u need another =>Fun */}
      <button onDoubleClick={(e) => handleClick(e)}>Click me 👍</button>
    </div>
  );
}

export default Button;

//---------------------------------------------------------------- //
/*Conditonal onClick */
//   let count = 1;
//   const btnName = (name) => {
//     if (count <= 3) {
//       console.log(`${name} you clicked me ${count} times`);
//       count++;
//     } else {
//       console.log(`${name} STOP clicking ME!`);
//     }
//   };
//onClick={() => btnName('Unranked')}
