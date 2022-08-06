import { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css';

const Timer = ({ on, stop }) => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (on) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }
  }, [on]);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdown_number}>
        <h5 className={styles.time}>{time}</h5>
        <h6 className={styles.seconds}>seconds</h6>
      </div>
      <svg className={styles.svg}>
        <circle
          r="53"
          cx="53"
          cy="53"
          style={{ animationPlayState: on ? 'running' : 'paused' }}
          className={styles.circle}
        ></circle>
      </svg>
    </div>
  );
};

export default Timer;
