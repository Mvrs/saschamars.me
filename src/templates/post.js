import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Img from 'gatsby-image';

import { AboutText, TextContainer } from '../pages/about';

import useSiteMetadata from '../hooks/use-sitemetadata';

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
        slug
        tags
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 665, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      excerpt
      body
    }

    footerImage: file(relativePath: { eq: "van-shoe.jpg" }) {
      sharp: childImageSharp {
        fixed(width: 63, height: 63, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post, footerImage }, pageContext }) => {
  const featuredImgFluid = post.frontmatter.image.childImageSharp.fluid;
  const shoeImage = footerImage.sharp.fixed;

  const { next, prev } = pageContext;
  const { keywords, url } = useSiteMetadata();

  return (
    <>
      <Layout>
        <Helmet>
          <html lang="en" />
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={post.excerpt} />
          <meta
            property="og:image"
            content={post.frontmatter.image.publicURL}
          />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:url"
            href={`${url}/blog/${post.frontmatter.title}`}
          />
          <link
            rel="canonical"
            href={`${url}/blog/${post.frontmatter.title}`}
          />
        </Helmet>
        <TextContainer>
          <h1
            css={css`
              color: #222;
              letter-spacing: 0.12rem;
              font-size: 1.75rem;
              line-height: 1.1;
              text-align: center;
            `}
          >
            {post.frontmatter.title}
          </h1>

          <p
            css={css`
              font-size: 0.875rem;
              letter-spacing: 0.05rem;
              text-align: center;
            `}
          >
            Posted on {post.frontmatter.date}
          </p>
          <Img
            css={css`
              border-radius: 0.25rem;
            `}
            fadeIn={false}
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
                text-align: center;
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
                <div
                  css={css`
                    border-style: none;
                    left: 0;
                    margin-top: 0;
                    object-fit: contain;
                    object-position: center center;
                    opacity: 1;
                    padding: 0;
                    top: 0;
                    transition: none 0s ease 0s;
                    border-radius: 50%;
                    width: 63px;
                    height: 63px;
                  `}
                >
                  <Img
                    alt="my shoe"
                    loading="eager"
                    fixed={shoeImage}
                    imgStyle={{
                      height: 63,
                      width: 63,
                      borderRadius: 50,
                      marginTop: 0,
                    }}
                  />
                </div>
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
      </Layout>
    </>
  );
};

export default PostTemplate;
