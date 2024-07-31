// Explain this component in simple terms:

import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const startTime = useRef(0);
  let intervalIdRef = useRef(null);

  //use Effect to update interval
  useEffect(() => {
    // enter if only isRunning is true
    if (isRunning === true) {
      intervalIdRef.current = setInterval(() => {
        setDuration(Date.now() - startTime.current); //(get current date in ms) - (from startTime (when we clicked start))
      }, 1); //every 10ms duration will be updated (duration is what we display)
    }

    return () => clearInterval(intervalIdRef.current); //   after we clean interval
  }, [isRunning]); // trigger when mounting & when isRunning change value

  //functions
  function start() {
    setIsRunning(true);
    startTime.current = Date.now() - duration; //this sets current start time in ms (in 'Epic') | -duration is for clicking start again, we dont lose progress(reset).
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setDuration(0);
    setIsRunning(false);
  }
  // eg..  hours= .getHours
  function formatTime() {
    let hours = Math.floor(duration / (1000 * 60 * 60)); //100 ms /1000 => S, /60 => M, /60 H .
    let minutes = Math.floor((duration / (1000 * 60)) % 60); //as soon as mins hit 60, then remainder it to 0
    let seconds = Math.floor((duration / 1000) % 60);
    let milliSeconds = Math.floor(duration % 1000); // we need %10 to reach 2 digits only (remove if not needed)

    // we adding padding for double digits 00:00:00
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    milliSeconds = milliSeconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
  }

  return (
    <div className="stop-watch">
      <h1 className="time-display">{formatTime()}</h1>
      <div>
        <button className="btn btn-start" onClick={start}>
          Start
        </button>
        <button className="btn btn-stop" onClick={stop}>
          Stop
        </button>
        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default StopWatch;
