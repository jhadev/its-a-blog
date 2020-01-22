import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/postPreview';
import usePosts from '../hooks/usePosts';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>This is my home, it is pretty cozy.</h1>
      <p>howdy.</p>
      <Link to="/about/">learn about me</Link>

      <h2>Read these posts.</h2>
      {/* COMPONENT NOT MADE YET, RIP THIS OUT */}
      {posts.map(post => {
        return <PostPreview key={post.slug} post={post} />;
      })}
    </Layout>
  );
};
