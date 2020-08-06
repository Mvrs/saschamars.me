import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Img from 'gatsby-image';
import BlogFooter from '../components/blog-footer';
import headshot from '../../images/van-shoe.jpg';
import { navigate } from 'gatsby';

import {
  AboutText,
  TextContainer,
  ImageHolder,
  AboutFooter,
} from '../pages/about';

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
        slug
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

const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const featuredImgFluid = post.frontmatter.image.childImageSharp.fluid;
  // const vW = post.frontmatter.image.childImageSharp.fluid.presentationWidth;
  // const vH = post.frontmatter.image.childImageSharp.fluid.presentationHeight;

  const { next, prev, slug } = pageContext;

  console.log(slug);

  console.log(pageContext);

  return (
    <>
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
            css={css`
              border-radius: 0.25rem;
            `}
            fluid={featuredImgFluid}
            imgStyle={{ objectFit: 'contain', marginTop: '0' }}
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
        <TextContainer>
          <footer
            css={css`
              margin-top: 40px;
              padding-top: 20px;
              display: block;
            `}
          >
            <hr
              css={css`
                background: rgba(0, 0, 0, 0.2);
                border: none;
                height: 2px;
                border-radius: 7px;
                padding: 0;
              `}
            />
            <div
              css={css`
                min-width: 0px;
                display: flex;
                margin-bottom: 24px;
                align-items: center;
              `}
            >
              <AboutText
                css={css`
                  box-sizing: border-box;
                  min-width: 0px;
                  display: flex;
                  margin-bottom: 48px;
                  -webkit-box-align: center;
                  align-items: center;
                `}
              >
                {/* <div
                  css={css`
                    height: 100px;
                    margin-top: 0px;
                    @media (max-width: 767px) {
                      height: 80px;
                      margin-top: 0px;
                    }
                  `}
                >
                  {}
                </div> */}
                <img
                  alt="marlon johnson"
                  src={headshot}
                  css={css`
                    border-style: none;
                    /* height: 100%; */
                    left: 0;
                    margin: 0;
                    /* max-width: 100%; */
                    object-fit: contain;
                    object-position: center center;
                    opacity: 1;
                    padding: 0;
                    /* position: absolute; */
                    /* top: 0; */
                    transition: none 0s ease 0s;
                    border-radius: 100%;
                    width: 3.5rem;
                    height: 3.5rem;
                  `}
                />
                <div
                  css={css`
                    display: block;
                    margin: auto;
                    padding-left: 10px;
                    line-height: 1.5;
                  `}
                >
                  I’m Marlon but you can call me Mars. Software Engineer. Music
                  lover. Bay Area Native. Feel free to{' '}
                  <a
                    href="mailto: johnsonmarlon18@gmail.com"
                    css={css`
                      color: #db99b9;
                    `}
                  >
                    Contact
                  </a>{' '}
                  me.
                </div>
              </AboutText>
            </div>

            <ul
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                list-style: none;
                padding: 0px;
                flex-flow: row-reverse;
                margin: 0 0 1.45rem 1.45rem;
              `}
            >
              <li>
                {next && (
                  <ReadLink
                    to={`/blog/${next.frontmatter.slug}`}
                    css={css`
                      display: flex;
                      justify-content: flex-end;
                      font-size: 16px;
                      text-decoration: none;
                      text-transform: none;
                    `}
                  >
                    {next.frontmatter.slug} &rarr;
                  </ReadLink>
                )}
              </li>
              <li>
                {prev && (
                  <ReadLink
                    to={`/blog/${prev.frontmatter.slug}`}
                    css={css`
                      display: flex;
                      justify-content: flex-start;
                      text-decoration: none;
                      font-size: 16px;
                      text-transform: none;
                    `}
                  >
                    &larr; {prev.frontmatter.slug}
                  </ReadLink>
                )}
              </li>
            </ul>
          </footer>
        </TextContainer>
        {/* <ReadLink to="/blog/">&larr; back to all posts</ReadLink> */}
      </Layout>
      {/* <BlogFooter
        css={css`
          width: 100%;
          position: absolute;
        `}
      /> */}
    </>
  );
};

export default PostTemplate;
