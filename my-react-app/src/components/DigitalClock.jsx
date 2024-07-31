import { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date()); //intial value is current date obj
  function handleTimeChange() {
    setTime((t) => (t = new Date()));
  }
  function formatedTime() {
    const hours = String(time.getHours()).padStart(2, '0'); //string always length 2 , if needed add '0' if empty.
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  }

  useEffect(handleTimeChange, [time]);

  return (
    <div className="clock-container">
      <div className="digital-clock">
        <span onChange={handleTimeChange}>{formatedTime()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
