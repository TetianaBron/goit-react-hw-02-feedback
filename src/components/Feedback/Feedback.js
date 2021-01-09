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

    handleIncrementGood = () => {
        console.log('Good');

        this.setState({
            good: this.state.good + 1,
        });
    };

    handleIncrementNeutral = () => {
        console.log('Neutral');

         this.setState({
            neutral: this.state.neutral + 1,
        });
    }

    handleIncrementBad = () => {
        console.log('Bad');

         this.setState({
            bad: this.state.bad + 1,
        });
    }

    render() {

        return (
            <div>
                <p className="text">Please leave feedback</p>
                <button type="button" onClick={this.handleIncrementGood}>
                    Good
                </button>
                <button
                    type="button" onClick={this.handleIncrementNeutral}>
                    Neutral
                </button>
                <button
                    type="button" onClick={this.handleIncrementBad}>Bad
                </button>
                <p className="text">Statictic</p>

                <ul>
                    <li>Good: <span>{this.state.good}</span></li>
                    <li>Neutral: <span>{this.state.neutral}</span></li>
                    <li>Bad: <span>{this.state.bad}</span></li>
                </ul>
            </div>
        );
    }
}