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
                homepageUrl
              }
            }
          }
        }
      }
    }
  `);

  const nodes = dataNodes.githubData.data.user.pinnedItems.nodes.map(node => ({
    id: node.id,
    name: node.name,
    description: node.description,
    url: node.url,
    homepageUrl: node.homepageUrl
  }));

  return nodes;
};

export default useGithub;
