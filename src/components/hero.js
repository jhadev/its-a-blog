import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/jeffrey-blum-nyc-winter.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0px;
  }
`;

// hex with alpha channel 8 digit hex codes https://css-tricks.com/8-digit-hex-codes/
const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <div>
          <h1>i am josh a.</h1>
          <p>
            hi... <Link to="/about/">learn about me</Link>
          </p>
        </div>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;