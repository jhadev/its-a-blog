import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/jeffrey-blum-nyc-winter.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  margin: -1rem 0 !important;
`;

// hex with alpha channel 8 digit hex codes https://css-tricks.com/8-digit-hex-codes/
const TextBox = styled('div')`
  background-image: linear-gradient(to top, rgba(245, 66, 158, 0.3) 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    color: #ffffff;
    text-shadow: 1px 1px 5px rgba(245, 66, 158, 0.4);
    font-size: 2.25rem;
  }

  p,
  a {
    color: #242424;
    font-weight: bold;
    margin-top 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  // can rename graphql nodes like renaming objects when destructuring
  // graphql fragments like ... rest operator in js
  // gatsby does this to spread everything we need
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "jeffrey-blum-nyc-winter.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  // fadeIn blurs image on slow connections
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
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
