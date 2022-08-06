import { useEffect, useState } from 'react';
import Box from '../components/Box';
import Textarea from '../components/Textarea';
import Timer from '../components/Timer';
import paragraph from '../data/paragraph';
import styles from '../styles/Main.module.css';

const Main = () => {
  const [textArr, setTextArr] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    setTextArr(paragraph[Math.floor(Math.random() * 9)].split(' '));
  }, []);

  let latestWordCount = 0;

  const handleWpm = (count) => {
    setWordCount((prevCount) => {
      latestWordCount = prevCount + count;
      return prevCount + count;
    });
  };

  const handleCpm = (count) => {
    setCharCount((prevCount) => {
      return prevCount + count;
    });
  };

  const handleAccuracy = (count) => {
    if (latestWordCount) {
      setAccuracy(Math.floor((latestWordCount * 100) / count));
    } else {
      setAccuracy(Math.floor((wordCount * 100) / count));
    }
  };

  const handleTimer = (val) => {
    setTimerOn(val);
  };

  return (
    <>
      <div>
        <h4>typing speed test</h4>
        <h1>Test your typing skills</h1>
      </div>
      <div className={styles.container}>
        <Timer on={timerOn} />
        <div className={styles.boxes}>
          <Box text="words/min" value={wordCount} />
          <Box text="chars/min" value={charCount} />
          <Box text="% accuracy" value={accuracy} />
        </div>
      </div>
      <Textarea
        text={textArr}
        words={handleWpm}
        chars={handleCpm}
        acc={handleAccuracy}
        timer={handleTimer}
      />
    </>
  );
};

export default Main;
