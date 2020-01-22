import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  /* frontmatter is inside the mdx gates 
    ---
    here
    ---
  */

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `);

  const posts = data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt
  }));

  return posts;
};

export default usePosts;
