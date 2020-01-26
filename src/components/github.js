import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useGithub from '../hooks/useGithub';

const Github = () => {
  const githubData = useGithub();
  console.log(githubData);
  return <h1>Hi! github goes here.</h1>;
};

export default Github;
