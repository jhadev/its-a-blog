import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h1>This is my home, it is pretty cozy.</h1>
      <p>howdy.</p>
      <Link to="/about/">learn about me</Link>
    </Layout>
  );
};
