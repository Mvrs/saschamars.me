const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
// const { default: PostTemplate } = require("./src/templates/post");
const _ = require(`lodash`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogPostTemplate = path.resolve(`./src/templates/post.js`);
  const tagTemplate = path.resolve(`./src/templates/tags.js`);

  const result = await graphql(`
    {
      allTagColorsJson {
        edges {
          node {
            id
          }
        }
      }
      postMdx: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 20
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

  posts.forEach(({ node }) => {
    actions.createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // extracting tags from query
  const tags = result.data.tagsMdx.group;
  const postTags = result.data.postMdx.edges;

  // inline tags
  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
