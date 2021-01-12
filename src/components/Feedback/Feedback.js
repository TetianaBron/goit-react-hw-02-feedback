import './Feedback.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    const { good, neutral, bad } = options;
    return (
        <div> 
             <button type="button" onClick={() => onLeaveFeedback(good)}>
                    Good
                </button>
                <button
                    type="button" onClick={() => onLeaveFeedback(neutral)}>
                    Neutral
                </button>
                <button
                    type="button" onClick={() => onLeaveFeedback(bad)}>
                        Bad
                </button>
        </div>
    );
}
        
export default FeedbackOptions;