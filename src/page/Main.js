import { useState } from 'react';
import Box from '../components/Box';
import Timer from '../components/Timer';
import styles from '../styles/Main.module.css';

const Main = () => {
  const [timerOn, setTimerOn] = useState(false);
  const [count, setCount] = useState(0);
  const [placeText, setPlaceText] = useState('');

  function timer() {
    setTimerOn(true);
  }

  function handleText(event) {
    setPlaceText(event.target.value);
    if (event.target.value.length === 1) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 60) {
            clearInterval(interval);
            return 0;
          } else {
            return prevCount + 1;
          }
        });
      }, 1000);
    }
  }

  return (
    <>
      <div>
        <h4>typing speed test</h4>
        <h1>Test your typing skills</h1>
      </div>
      <div className={styles.container}>
        <Timer running={timerOn} />
        <div className={styles.boxes}>
          <Box text="words/min" value={false} />
          <Box text="chars/min" value={false} />
          <Box text="% accuracy" value={false} />
        </div>
      </div>
      <div className={styles.textcontent}>
        <textarea
          className={styles.textarea}
          onKeyPress={timer}
          onChange={(event) => handleText(event)}
          placeholder="Hi bro"
          value={placeText}
        />
      </div>
    </>
  );
};

export default Main;
