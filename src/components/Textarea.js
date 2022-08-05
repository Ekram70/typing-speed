import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Textarea.module.css';

const Textarea = ({ text }) => {
  const [textArr, setTextArr] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const editSpan = useRef(null);
  const tooltip = useRef(null);

  useEffect(() => {
    setTextArr(text);
    editSpan.current.focus();
  }, [text]);

  const generateSpans = () => {
    return textArr.map((word, idx) => <span key={idx}>{word}</span>);
  };

  const startFocus = () => {
    editSpan.current.focus();
  };

  const handleKeyPress = (e) => {
    setIsActive(false);
    if (textArr[0][0] === e.key) {
      setTextArr((prevArr) => {
        return [prevArr[0].substring(1), ...prevArr.slice(1)];
      });
    } else {
      setIsValid(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      let firstElem = editSpan.current.innerText.slice(-1) + textArr[0];

      if (text[0] === editSpan.current.innerText.slice(0, -1) + textArr[0]) {
        setIsValid(true);
      }

      if (text[0] === editSpan.current.innerText + textArr[0]) {
        setTextArr((prevArr) => {
          return [firstElem, ...prevArr.slice(1)];
        });
      }
    }
  };

  return (
    <div className={styles.textarea} onClick={startFocus}>
      <span
        ref={tooltip}
        className={styles.tooltip}
        style={{ opacity: isActive ? '1' : 0 }}
      >
        Start Typing
      </span>
      <div className={styles.output}>
        <span
          ref={editSpan}
          className={isValid ? '' : styles.invalid}
          contentEditable
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
        ></span>
      </div>
      <div className={styles.sample}>{generateSpans()}</div>
    </div>
  );
};

export default Textarea;
