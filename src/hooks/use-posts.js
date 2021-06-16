import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            title
            slug
            date
            author
            tags
            image {
              sharp: childImageSharp {
                gatsbyImageData(
                  width: 200
                  layout: FULL_WIDTH
                  height: 150 # duotone: { shadow: "#663399", highlight: "#ddbbff" }
                  formats: [AUTO]
                )
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    tags: post.frontmatter.tags,
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
