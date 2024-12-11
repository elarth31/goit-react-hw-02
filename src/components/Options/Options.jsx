import styles from './Options.module.css';
import Button from '../Button/Button';

const Options = ({ updateFeedback, isVisible }) => {
  const feedbackTypes = ['good', 'neutral', 'bad'];

  return (
    <div className={styles.wrapper}>
      {feedbackTypes.map((type) => (
        <Button key={type} onClick={updateFeedback} label={type.charAt(0).toUpperCase() + type.slice(1)}>
          {type.charAt(0).toUpperCase() + type.slice(1)} 
        </Button>
      ))}
      {isVisible && (
        <Button onClick={() => updateFeedback('reset')} label="Reset">
          Reset
        </Button>
      )}
    </div>
  );
};

export default Options;

