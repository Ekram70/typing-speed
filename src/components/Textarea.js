import { useEffect, useState } from 'react';
import paragraph from '../data/paragraph';
import styles from '../styles/Textarea.module.css';

const Textarea = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(paragraph[Math.floor(Math.random() * 9)]);
  }, []);

  const generateSpans = (text) => {
    let textArr = text.split(' ');
    return textArr.map((word, idx) => <span key={idx}>{word}</span>);
  };

  return (
    <>
      <div className={`${styles.output}`}>
        <span></span>
      </div>
      <div className={`${styles.sample}`}>{generateSpans(text)}</div>
    </>
  );
};

export default Textarea;
