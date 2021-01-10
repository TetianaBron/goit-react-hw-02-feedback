import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';

export default class App extends Component {

  render() {
    return (
      <Layout>
        <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0} />
      </Layout>
    );
  }
}