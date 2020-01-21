import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h1>Yo Yo Yo Yo!</h1>
      <p>I'm boring so there is nothing here now.</p>
      <Link to="/">take me home</Link>
    </Layout>
  );
};
