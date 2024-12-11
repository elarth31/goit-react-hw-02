import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={styles.wrapper}>
      {Object.keys(feedback).map((key) => (
        <li className={styles.feedbackItem} key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: <b>{feedback[key]}</b>
        </li>
      ))}
    
      <li className={styles.text}>
        Total: <b>{totalFeedback}</b>
      </li>
      <li className={styles.text}>
        Positive: <b>{positiveFeedback}%</b>
      </li>
    </ul>
  );
};

export default Feedback;
