import { graphql, useStaticQuery } from 'gatsby';
import useSiteMetaData from '../hooks/use-sitemetadata';

const useTags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(tag => ({
    tags: tag.frontmatter.tags,
  }));
};

export default useTags;
