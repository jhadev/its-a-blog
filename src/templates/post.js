import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
// to display mdx body import mdx renderer
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/readLink';

// export query to only get post data that is needed dynamically using slug variable
// search mdx files where slug matches slug variable passed in and return title, author, body
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

// data is graphql entire query, mdx is entire data object - rename it to post
const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        post by: {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
