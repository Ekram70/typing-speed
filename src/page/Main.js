import { useState } from 'react';
import Timer from '../components/Timer';

const Main = () => {
  const [timerOn, setTimerOn] = useState(false);
  function timer() {
    setTimerOn(true);
  }
  return (
    <>
      <h4>typing speed test</h4>
      <h1>Test your typing skills</h1>
      <div>
        <Timer running={timerOn} />
        <button onClick={timer}>Timer</button>
      </div>
    </>
  );
};

export default Main;
