import { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date()); //intial value is current date obj

  // function handleTimeChange() {
  //   setTime((t) => {
  //     t.inter = new Date();
  //   });
  //   console.log('time updated');
  // }

  function formatedTime() {
    let hours = String(time.getHours()).padStart(2, '0'); //string always length 2 , if needed add '0' if empty.
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    const meridiem = hours >= 12 ? 'PM' : 'AM'; //Excutes before switching to 12 hours clock

    hours = hours % 12 || 12; //if hours =13, (13%12 = 1 AM) | (12%12= 0 => 12AM)

    return `${hours} : ${minutes} : ${seconds} ${meridiem}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log('time updated');
    }, 1000); //every 1000ms excute this code

    //clean up when dismount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock-container">
      <div className="digital-clock">
        <span className="clock-background">{formatedTime()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
