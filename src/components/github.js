import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useGithub from '../hooks/useGithub';

const Github = () => {
  const githubData = useGithub();
  console.log(githubData);
  return (
    <>
      <h2>my projects</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 1rem -0.5rem;
        `}
      >
        {githubData.map(repo => {
          return (
            <div
              css={css`
                background-color: #333;
                padding: 10px;
                border-radius: 10px;
                color: #fff;
                box-shadow: 0;
                display: block;
                margin: 0.5rem;
                width: 265px;
                transition: 200ms box-shadow linear;

                :focus,
                :hover {
                  box-shadow: 0 2px 14px #22222255;
                  z-index: 10;
                }
              `}
              key={repo.id}
            >
              <div
                css={css`
                  width: %;
                  font-size: 14px;
                `}
              >
                <p>{repo.name}</p>
                <p>{repo.url}</p>
                <p>{repo.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
        `}
      >
        {githubData.map(repo => {
          return (
            <a
              key={repo.id}
              href={`http://instagram.com/p/${repo.id}`}
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
              {repo.name}
            </a>
          );
        })}
      </div>
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        see more on ig
      </a> */}
    </>
  );
};

export default Github;
