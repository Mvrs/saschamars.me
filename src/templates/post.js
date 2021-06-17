/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

import { AboutText, TextContainer } from '../pages/about';

import useSiteMetadata from '../hooks/use-sitemetadata';
import {
  InnerTagContainer,
  MainTagContainer,
  TagContainer,
  TagName,
} from '../components/tag-layout';

export const query = graphql`
  query ($slug: String) {
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
            gatsbyImageData(width: 665, quality: 75)
          }
        }
      }
      excerpt
      body
    }

    footerImage: file(relativePath: { eq: "van-shoe.jpg" }) {
      sharp: childImageSharp {
        gatsbyImageData(width: 63, height: 63, quality: 100)
      }
    }
  }
`;

// const BlogTitleContainer = styled('div')`
//   box-sizing: border-box;
//   color: #222;
//   cursor: pointer;
//   /* flex: 3; */
//   font-family: Roboto, sans-serif;
//   letter-spacing: 0.4px;
//   line-height: 18.4px;
//   margin-right: 1rem;

//   order: -1;
//   flex: 1 0 25%;

//   @media (max-width: 479px) {
//     flex: 1 0 100%;
//   }
// `;

// const BlogDateContainer = styled('div')`
//   box-sizing: border-box;
//   color: #222;
//   cursor: pointer;
//   /* flex: 1; */
//   letter-spacing: 0.4px;
//   line-height: 18.4px;
//   margin-top: 0;
//   text-align: right;

//   /* order: 1;
//   flex: 1 0 50%; */

//   order: 0;
//   flex: 0 50%;

//   /* @media screen and (device-width: 320px) {
//     flex: 0 45%;
//   } */

//   @media (max-width: 479px) {
//     order: 0;
//     flex: 0 40%;
//   }
//   /* @media (max-width: 779px) {
//     display: inline-flex;
//   } */
// `;

// export const MainTagContainer = styled('div')`
//   box-sizing: border-box;
//   cursor: default;
//   display: block;
//   font-size: 14px;
//   min-height: 32px;
//   outline: 0;
//   justify-content: left;
//   overflow: hidden;
//   padding: 0 8px 0 0;
//   white-space: normal;
//   width: 200px;
//   margin-top: 5px;
//   order: 1;
//   /* flex: 0 55%; */
//   flex: 1 62%;

//   @media (max-width: 479px) {
//     margin-top: 4px;

//     /* justify-content: baseline;
//     align-content: flex-start; */
//   }
// `;

const PostTemplate = ({ data: { mdx: post, footerImage }, pageContext }) => {
  const featuredImgFluid = getImage(
    post.frontmatter.image?.childImageSharp.getsbyImageData,
  );
  const shoeImage = footerImage.sharp.gatsbyImageData;

  const { next, prev } = pageContext;
  const { keywords, url } = useSiteMetadata();

  const post_tags = post?.frontmatter?.tags;

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
            content={post && post.frontmatter.image?.publicURL}
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
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            margin-top: 2rem;
          `}
        >
          <div
            css={css`
              order: -1;
              flex: 1 0 100%;
            `}
          >
            <h1
              css={css`
                color: #222;
                letter-spacing: 0.12rem;
                font-size: 1.75rem;
                line-height: 1.1;
                text-align: left;

                order: 0;
                flex: 1 0 100%;
              `}
            >
              {post.frontmatter.title}
            </h1>
          </div>
          <div
            css={css`
              order: 0;
              flex: 2 0 50%;
            `}
          >
            <p
              css={css`
                font-size: 0.875rem;
                letter-spacing: 0.05rem;
                text-align: left;
                font-style: italic;
              `}
            >
              {post.frontmatter.date}
            </p>
          </div>
          <MainTagContainer>
            <InnerTagContainer>
              {post_tags?.map((tags, i) => {
                if (tags === 'Life') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        /* appearance: button; */
                        background-color: #ede9fe;
                        background-image: none;
                        border: 2px solid rgba(139, 92, 246, 0.5);
                        border-radius: 0.25rem;
                        box-sizing: border-box;
                        color: #5b21b6;
                        cursor: pointer;
                        display: inline-flex;
                        font-family: ui-sans-serif, system-ui, -apple-system,
                          BlinkMacSystemFont, 'Segoe UI', Roboto,
                          'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                          'Apple Color Emoji', 'Segoe UI Emoji',
                          'Segoe UI Symbol', 'Noto Color Emoji';
                        font-size: 0.875rem;
                        font-weight: 600;
                        line-height: 1.25rem;
                        /* margin: 0rem 0.25rem 0.25rem; */
                        padding: 0.5rem 0.5rem;
                        text-align: center;
                        text-transform: none;
                        /* ::active {
                        color: 
                      } */

                        ::focus {
                          outline: 5px auto rgba(139, 92, 246, 0.5);
                        }
                      `}
                    >
                      <TagName>{tags}</TagName>
                    </TagContainer>
                  );
                }
                if (tags === 'TypeScript') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        /* appearance: button; */
                        background-color: #dbeafe;
                        background-image: none;
                        border: 2px solid rgba(30, 64, 175, 0.5);
                        border-radius: 0.25rem;
                        box-sizing: border-box;
                        color: #1e40af;
                        cursor: pointer;
                        display: inline-flex;
                        font-family: ui-sans-serif, system-ui, -apple-system,
                          BlinkMacSystemFont, 'Segoe UI', Roboto,
                          'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                          'Apple Color Emoji', 'Segoe UI Emoji',
                          'Segoe UI Symbol', 'Noto Color Emoji';
                        font-size: 0.875rem;
                        font-weight: 600;
                        line-height: 1.25rem;
                        /* margin: 0rem 0.25rem 0.25rem; */
                        padding: 0.5rem 0.5rem;
                        text-align: center;
                        text-transform: none;
                        /* ::active {
                        color: 
                      } */

                        ::focus {
                          outline: 5px auto rgba(30, 64, 175, 0.5);
                        }
                      `}
                    >
                      <TagName>{tags}</TagName>
                    </TagContainer>
                  );
                }
                if (tags === 'React') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        /* background-color: #0078df; */
                        /* opacity: 0.4; */
                        /* color: #fff; */

                        /* appearance: button; */
                        background-color: rgba(50, 138, 255, 0.1);
                        background-image: none;
                        border: 2px solid rgba(50, 138, 255, 0.5);
                        border-radius: 0.25rem;
                        box-sizing: border-box;
                        color: #328aff;
                        cursor: pointer;
                        display: inline-flex;
                        font-family: ui-sans-serif, system-ui, -apple-system,
                          BlinkMacSystemFont, 'Segoe UI', Roboto,
                          'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                          'Apple Color Emoji', 'Segoe UI Emoji',
                          'Segoe UI Symbol', 'Noto Color Emoji';
                        font-size: 0.875rem;
                        font-weight: 600;
                        line-height: 1.25rem;
                        /* margin: 0rem 0.25rem 0.25rem; */
                        padding: 0.5rem 0.5rem;
                        text-align: center;
                        text-transform: none;
                        /* ::active {
                        color: 
                      } */

                        ::focus {
                          outline: 5px auto rgba(50, 138, 255, 0.5);
                        }
                      `}
                    >
                      <TagName>{tags}</TagName>
                    </TagContainer>
                  );
                }
                if (tags === 'JavaScript') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        /* appearance: button; */
                        background-color: #fbffb9;
                        background-image: none;
                        border: 2px solid rgba(239, 220, 5, 1);
                        border-radius: 0.25rem;
                        box-sizing: border-box;
                        color: #fdc23e;
                        cursor: pointer;
                        display: inline-flex;
                        font-family: ui-sans-serif, system-ui, -apple-system,
                          BlinkMacSystemFont, 'Segoe UI', Roboto,
                          'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                          'Apple Color Emoji', 'Segoe UI Emoji',
                          'Segoe UI Symbol', 'Noto Color Emoji';
                        font-size: 0.875rem;
                        font-weight: 600;
                        line-height: 1.25rem;
                        /* margin: 0rem 0.25rem 0.25rem; */
                        padding: 0.5rem 0.5rem;
                        text-align: center;
                        text-transform: none;
                        /* ::active {
                        color: 
                      } */

                        ::focus {
                          outline: 5px auto rgba(50, 138, 255, 0.5);
                        }
                      `}
                    >
                      <TagName>{tags}</TagName>
                    </TagContainer>
                  );
                }
                if (tags === 'bigfrontend.dev') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        /* appearance: button; */
                        background-color: rgba(255, 116, 116, 0.1);
                        background-image: none;
                        border: 2px solid rgba(255, 116, 116, 0.5);
                        border-radius: 0.25rem;
                        box-sizing: border-box;
                        color: #ff7474;
                        cursor: pointer;
                        display: inline-flex;
                        font-family: ui-sans-serif, system-ui, -apple-system,
                          BlinkMacSystemFont, 'Segoe UI', Roboto,
                          'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                          'Apple Color Emoji', 'Segoe UI Emoji',
                          'Segoe UI Symbol', 'Noto Color Emoji';
                        font-size: 0.875rem;
                        font-weight: 600;
                        line-height: 1.25rem;
                        /* margin: 0rem 0.25rem 0.25rem; */
                        padding: 0.5rem 0.5rem;
                        text-align: center;
                        text-transform: none;
                        /* ::active {
                        color: 
                      } */

                        ::focus {
                          outline: 5px auto rgba(255, 116, 116, 0.5);
                        }
                      `}
                    >
                      <TagName>{tags}</TagName>
                    </TagContainer>
                  );
                }
                if (tags === 'random') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        /* appearance: button; */
                        background-color: rgba(0, 184, 92, 0.1);
                        background-image: none;
                        border: 2px solid rgba(0, 184, 92, 0.5);
                        border-radius: 0.25rem;
                        box-sizing: border-box;
                        color: #00b85c;
                        cursor: pointer;
                        display: inline-flex;
                        font-family: ui-sans-serif, system-ui, -apple-system,
                          BlinkMacSystemFont, 'Segoe UI', Roboto,
                          'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                          'Apple Color Emoji', 'Segoe UI Emoji',
                          'Segoe UI Symbol', 'Noto Color Emoji';
                        font-size: 0.875rem;
                        font-weight: 600;
                        line-height: 1.25rem;
                        /* margin: 0rem 0.25rem 0.25rem; */
                        padding: 0.5rem 0.5rem;
                        text-align: center;
                        text-transform: none;
                        /* ::active {
                        color: 
                      } */

                        ::focus {
                          outline: 5px auto rgba(0, 184, 92, 0.5);
                        }
                      `}
                    >
                      <TagName>{tags}</TagName>
                    </TagContainer>
                  );
                }
              })}
            </InnerTagContainer>
          </MainTagContainer>
        </div>

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
                    transition: none 0s ease 0s;
                    border-radius: 50%;
                    width: 63px;
                    height: 63px;
                    /* position: relative; */
                  `}
                >
                  <GatsbyImage
                    alt="my shoe"
                    loading="eager"
                    // fixed={shoeImage}
                    image={shoeImage}
                    imgStyle={{
                      height: 63,
                      width: 63,
                      borderRadius: 50,
                      marginTop: 0,
                      top: '-62px',
                      position: 'relative',
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
