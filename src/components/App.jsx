import { useEffect, useState } from 'react';
import Feedback from './Feedback/Feedback.jsx';
import Notification from './Notification/Notification.jsx';
import Description from './Description/Description.jsx';
import Options from './Options/Options.jsx';


const defaultFeedback = {
	good: 0,
	neutral: 0,
	bad: 0,
};

const getStoredFeedback = () => {
  const savedFeedback = localStorage.getItem('feedback-data');
  return savedFeedback ? JSON.parse(savedFeedback) : defaultFeedback;
};

function App() {
	const [feedback, setFeedback] = useState(getStoredFeedback);

	useEffect(() => {
		localStorage.setItem('feedback-data', JSON.stringify(feedback));
	}, [feedback]);

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

	
	  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;


	const updateFeedback = (feedbackType) => {
		if (feedbackType === 'reset') {
			setFeedback(defaultFeedback);
		} else {
			setFeedback({
				...feedback,
				[feedbackType]: feedback[feedbackType] + 1,
			});
		}
	};

	return (
		<>
			<Description />
			<Options updateFeedback={updateFeedback} isVisible={totalFeedback > 0} />
			{totalFeedback ? (
				<Feedback
					feedback={feedback}
					totalFeedback={totalFeedback}
					positiveFeedback={positiveFeedback}
				/>
			) : (
				<Notification />
			)}
		</>
	);
}

export default App;