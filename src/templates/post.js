import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Img from 'gatsby-image';

import { AboutText, TextContainer, ImageHolder } from '../pages/about';

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
        image {
          childImageSharp {
            fluid(maxWidth: 665, quality: 100) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
        }
      }
      excerpt
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  const featuredImgFluid = post.frontmatter.image.childImageSharp.fluid;
  const vW = post.frontmatter.image.childImageSharp.fluid.presentationWidth;
  const vH = post.frontmatter.image.childImageSharp.fluid.presentationHeight;

  return (
    <Layout>
      <TextContainer>
        <h1
          css={css`
            color: #222;
            letter-spacing: 0.12rem;
            font-size: 33px;
            line-height: 1.1;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <p
          css={css`
            font-size: 0.875rem;
            letter-spacing: 0.05rem;
          `}
        >
          Posted on {post.frontmatter.date}
        </p>
        <Img
          fluid={featuredImgFluid}
          imgStyle={{ objectFit: 'contain' }}
          style={{
            maxWidth: '665px',
          }}
        />
        <AboutText>
          <p
            css={css`
              font-style: italic;
            `}
          >
            {post.excerpt}
          </p>
        </AboutText>
      </TextContainer>

      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/blog/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
