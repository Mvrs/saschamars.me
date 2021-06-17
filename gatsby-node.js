const path = require(`path`);
const _ = require(`lodash`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogPostTemplate = path.resolve(`./src/templates/post.js`);
  const tagTemplate = path.resolve(`./src/templates/tags.js`);

  const result = await graphql(`
    {
      postMdx: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
      tagsMdx: allMdx(limit: 20) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('falied to create posts', result.errors);
  }

  const posts = result.data.postMdx.edges;

  posts.forEach(({ node }, index) => {
    const _path = node.frontmatter.slug;
    actions.createPage({
      path: `/blog/${_path}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });

  // extracting tags from query
  const tags = result.data.tagsMdx.group;
  // const postTags = result.data.postMdx.edges;

  // inline tags
  tags.forEach((tag) => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
