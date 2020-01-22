module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    }
  ],
  siteMetadata: {
    title: "it's my blog, yo!",
    description: 'just some projects and stuff.'
  }
};

// gatsby-source-filesystem turns local files into graphql data nodes.
