const Statistics = ({ good, neutral, bad, total, positivePercentage}) => (
    <div>
         <ul>
                    <li>Good: <span>{good}</span></li>
                    <li>Neutral: <span>{neutral}</span></li>
                    <li>Bad: <span>{bad}</span></li>
                </ul>
                <p className="total">Total: {total}</p>
                <p className="total">Positive feedback: {positivePercentage}%</p>
</div>
)

export default Statistics;