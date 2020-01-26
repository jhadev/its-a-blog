import { useStaticQuery, graphql } from 'gatsby';

const useGithub = () => {
  const dataNodes = useStaticQuery(graphql`
    query {
      githubData {
        data {
          user {
            repositories {
              edges {
                node {
                  name
                  description
                  url
                  stargazers {
                    totalCount
                  }
                  readme {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const nodes = dataNodes.githubData.data.user.repositories.edges.map(edge => ({
    name: edge.node.name,
    description: edge.node.description,
    url: edge.node.url,
    stargazers: edge.node.stargazers.totalCount,
    readme: edge.node.readme.text
  }));

  return nodes;
};

export default useGithub;
