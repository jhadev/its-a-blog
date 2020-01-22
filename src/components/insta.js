import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInsta from '../hooks/useInsta';

const Insta = () => {
  const instaData = useInsta();
  const { username } = instaData[0];
  return (
    <>
      <h2>insta posts from @meme_coding</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
        `}
      >
        {instaData.map(photo => {
          return (
            <a
              key={photo.id}
              href={`http://instagram.com/p/${photo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                box-shadow: 0;
                display: block;
                margin: 0.5rem;
                max-width: calc(35% - 1rem);
                width: 120px;
                transition: 200ms box-shadow linear;

                :focus,
                :hover {
                  box-shadow: 0 2px 14px #22222255;
                  z-index: 10;
                }
              `}
            >
              {/* because of mapped object in hook */}
              <Image
                fluid={photo.fluid}
                alt={photo.caption}
                css={css`
                  width: 100%;

                  * {
                    margin-top: 0;
                  }
                `}
              />
            </a>
          );
        })}
      </div>
      <a
        href={`http://instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        see more on ig
      </a>
    </>
  );
};

export default Insta;
