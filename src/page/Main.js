import { useEffect, useState } from 'react';
import Box from '../components/Box';
import Textarea from '../components/Textarea';
import Timer from '../components/Timer';
import paragraph from '../data/paragraph';
import styles from '../styles/Main.module.css';

const Main = () => {
  const [textArr, setTextArr] = useState([]);

  useEffect(() => {
    setTextArr(paragraph[Math.floor(Math.random() * 9)].split(' '));
  }, []);

  return (
    <>
      <div>
        <h4>typing speed test</h4>
        <h1>Test your typing skills</h1>
      </div>
      <div className={styles.container}>
        <Timer />
        <div className={styles.boxes}>
          <Box text="words/min" value={false} />
          <Box text="chars/min" value={false} />
          <Box text="% accuracy" value={false} />
        </div>
      </div>
      <Textarea text={textArr} />
    </>
  );
};

export default Main;
