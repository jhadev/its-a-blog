require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images'
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'meme_coding'
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static'
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: `${process.env.GITHUB_API_TOKEN}`,
        graphQLQuery: `
        query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
          user(login: $author) {
            pinnedItems(first: $userFirst, types: [REPOSITORY]) {
              edges {
                node {
                  ... on Repository {
                    name,
                    description,
                    url
                  }
                }
              }
            }
          }
        }`,
        variables: {
          userFirst: 6,
          searchFirst: 2,
          q: 'author:jhadev is:merged state:closed type:pr sort:comments',
          author: 'jhadev'
        }
      }
    }
  ],
  siteMetadata: {
    title: "it's my blog, yo!",
    description: 'just some projects and stuff.'
  }
};

// gatsby-source-filesystem turns local files into graphql data nodes.
