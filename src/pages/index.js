import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
    <>
      <h1>This is my home, it is pretty cozy.</h1>
      <p>howdy.</p>
      <Link to="/about/">learn about me</Link>
    </>
  );
};
