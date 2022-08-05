import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Textarea.module.css';

const Textarea = ({ text }) => {
  const [textArr, setTextArr] = useState([]);
  const [outputArr, setOutputArr] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [count, setCount] = useState(0);
  const editSpan = useRef(null);
  const tooltip = useRef(null);

  useEffect(() => {
    setTextArr(text);
    editSpan.current.focus();
  }, [text]);

  const generateSpans = (arr) => {
    return arr.map((word, idx) => {
      if (word.endsWith('xxxxx')) {
        return (
          <span key={idx} style={{ textDecoration: 'line-through' }}>
            {word.replace('xxxxx', '')}
          </span>
        );
      } else {
        return <span key={idx}>{word}</span>;
      }
    });
  };

  const startFocus = () => {
    editSpan.current.focus();
  };

  const handleKeyPress = (e) => {
    setIsActive(false);
    if (textArr[0][0] === e.key) {
      setIsValid(true);
      setTextArr((prevArr) => {
        return [prevArr[0].substring(1), ...prevArr.slice(1)];
      });
    } else if (e.key !== ' ') {
      setIsValid(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      let firstElem = editSpan.current.innerText.slice(-1) + textArr[0];

      if (
        text[count] ===
        editSpan.current.innerText.slice(0, -1) + textArr[0]
      ) {
        setIsValid(true);
      }

      if (text[count] === editSpan.current.innerText + textArr[0]) {
        setTextArr((prevArr) => {
          return [firstElem, ...prevArr.slice(1)];
        });
      }
    }

    if (e.key === ' ') {
      setTextArr((prevArr) => {
        return [...prevArr.slice(1)];
      });
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === ' ') {
      setCount((prevCount) => prevCount + 1);

      setOutputArr((prevArr) => {
        let spanText = editSpan.current.innerText.trimEnd();
        if (text[count] !== spanText) {
          spanText += 'xxxxx';
        }
        editSpan.current.innerText = '';
        return [...prevArr, spanText];
      });
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
        {generateSpans(outputArr)}
        <span
          ref={editSpan}
          className={isValid ? '' : styles.invalid}
          spellCheck="false"
          contentEditable
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        ></span>
      </div>
      <div className={styles.sample}>{generateSpans(textArr)}</div>
    </div>
  );
};

export default Textarea;
