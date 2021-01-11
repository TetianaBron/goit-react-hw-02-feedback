import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {

    };
    
    render() {
        const { title, children } = this.props;

        return (
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
}