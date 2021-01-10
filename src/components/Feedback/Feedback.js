import './Feedback.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={() => onLeaveFeedback('good')}>
                    Good
                </button>
                <button
                    type="button" onClick={() => onLeaveFeedback('neutral')}>
                    Neutral
                </button>
                <button
                    type="button" onClick={() => onLeaveFeedback('bad')}>Bad
                </button>
            </div>
);
        
export default FeedbackOptions;