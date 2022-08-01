import styles from '../styles/Box.module.css';

const Box = ({ value, text }) => {
  return (
    <div className={styles.box}>
      <h5 className={styles.number}>{value ? value : 0}</h5>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Box;
