module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsy-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    }
  ],
  siteMetadata: {
    title: "it's my blog, yo!",
    description: 'just some projects and stuff.'
  }
};
