import { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css';

const Timer = ({ running }) => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const prevTime = time;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    if (prevTime <= 0) {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdown_number}>
        <h5>{time}</h5>
        <h6>seconds</h6>
      </div>
      <svg>
        <circle r="53" cx="53" cy="53"></circle>
      </svg>
    </div>
  );
};

export default Timer;
