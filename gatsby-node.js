// gatsby-node, gatsby-browser, gatsby-ssr
// export a function that is the same name of one of the hooks gatsby looks for to run at that phase of the build

// gatsby gives access to actions and graphql
// reporter is gatsbys replacement for console.log

exports.createPages = async ({ actions, graphql, reporter }) => {
  // graphql is a function call here bc of node environment

  // only need slug bc no need to all of content
  // create pages and query data there
  const queryResult = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (queryResult.errors) {
    // stops gatsby build and displays error.
    reporter.panic('failed to create posts', queryResult.errors);
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: /* */,
      context: {
        slug: `/${post.frontmatter.slug}`
      }
    })
  })
};
