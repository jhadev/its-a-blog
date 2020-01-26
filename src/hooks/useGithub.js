import { useStaticQuery, graphql } from 'gatsby';

const useGithub = () => {
  const dataNodes = useStaticQuery(graphql`
    query {
      githubData {
        data {
          user {
            pinnedItems {
              nodes {
                id
                name
                description
                url
              }
            }
          }
        }
      }
    }
  `);

  const nodes = dataNodes.githubData.data.user.pinnedItems.nodes.map(node => ({
    name: node.name,
    description: node.description,
    url: node.url
  }));

  return nodes;
};

export default useGithub;
