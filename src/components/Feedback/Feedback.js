import React, { Component } from 'react';
import './Feedback.css';

export default class Feedbacker extends Component  {
    static propTypes = {};

    static defaultProps = {};

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    update = (type) => {

        this.setState(state => {
            return {
                [type]: state.[type] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    }

    countPositiveFeedbackPercentage = () => {
        const percentage = Math.round(100 * this.state.good / this.countTotalFeedback());
        return percentage > 0 ?  percentage : 0;
}


    render() {

    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

        return (
            <div>
                <p className="text">Please leave feedback</p>
                <button type="button" onClick={() => this.update('good')}>
                    Good
                </button>
                <button
                    type="button" onClick={() => this.update('neutral')}>
                    Neutral
                </button>
                <button
                    type="button" onClick={() => this.update('bad')}>Bad
                </button>
                <p className="text">Statictics</p>

                <ul>
                    <li>Good: <span>{this.state.good}</span></li>
                    <li>Neutral: <span>{this.state.neutral}</span></li>
                    <li>Bad: <span>{this.state.bad}</span></li>
                </ul>
                <p className="total">Total: {total}</p>
                <p className="total">Positive feedback: {positiveFeedbackPercentage}%</p>
            </div>
        );
    }
}