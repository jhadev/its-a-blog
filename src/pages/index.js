import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/postPreview';
import Hero from '../components/hero';
import Insta from '../components/insta';
import usePosts from '../hooks/usePosts';
import Github from '../components/github';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read these posts.</h2>
        {/* COMPONENT NOT MADE YET, RIP THIS OUT */}
        {posts.map(post => {
          return <PostPreview key={post.slug} post={post} />;
        })}
        <Insta />
        {/* <Github /> */}
      </Layout>
    </>
  );
};
