import styles from './Notification.module.css';

const Notification = ({ message = "No feedback yet. Please select one of the options to leave feedback." }) => {
  return (
    <p className={styles.notification}>
      {message}
    </p>
  );
};

export default Notification;