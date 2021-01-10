import React, { Component } from 'react';
import FeedbackOptions from '../Feedback/Feedback';

export default class Statistics extends Component  {
    static propTypes = {};

    static defaultProps = { };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
        total: this.props.total,
        positivePercentage: this.props.positivePercentage,
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
                <FeedbackOptions options={this.props} onLeaveFeedback={this.update}/>
                <h2>Statictics</h2>
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
