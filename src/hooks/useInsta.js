import { graphql, useStaticQuery } from 'gatsby';

const useInsta = () => {
  // fragments do not work in playground ...GatsbyImageSharpFluid_withWebp
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  // simplified object from query, spread localFile data
  const nodes = data.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username
  }));

  return nodes;
};

export default useInsta;
