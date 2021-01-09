import React from 'react';
import Layout from './components/Layout/Layout';
import Feedbacker from './components/Feedback/Feedback';

export default function App() {
  return (
    <Layout>
      <Feedbacker step={1}/>
    </Layout>
  );
}