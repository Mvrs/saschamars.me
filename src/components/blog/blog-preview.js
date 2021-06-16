import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Helmet from 'react-helmet';

import Readlink from '../read-link';
import {
  MainTagContainer,
  TagName,
  TagContainer,
  InnerTagContainer,
} from '../tag-layout';

import '../../styles/tag.module.css';
import useSiteMetadata from '../../hooks/use-sitemetadata';

const BlogWrapper = styled('div')`
  box-sizing: border-box;
  color: #222;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.4px;
  line-height: 18.4px;
  margin-left: -0.7rem;
  padding: 0 0.7rem;

  :hover {
    background-color: #f5f5f5;
    border-radius: 6px;
  }

  @media (max-width: 479px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const BlogTitleContainer = styled('div')`
  box-sizing: border-box;
  color: #222;
  cursor: pointer;
  /* flex: 3; */
  font-family: Roboto, sans-serif;
  letter-spacing: 0.4px;
  line-height: 18.4px;
  margin-right: 1rem;

  order: -1;
  flex: 1 0 25%;

  @media (max-width: 479px) {
    flex: 1 0 100%;
  }
`;

const BlogTitle = styled('p')`
  box-sizing: border-box;
  color: #222;
  cursor: pointer;
  font-size: 1.25rem;
  letter-spacing: 0.4px;
  line-height: 1.5;
`;

const BlogDateContainer = styled('div')`
  box-sizing: border-box;
  color: #222;
  cursor: pointer;
  /* flex: 1; */
  letter-spacing: 0.4px;
  line-height: 18.4px;
  margin-top: 0;
  text-align: right;

  /* order: 1;
  flex: 1 0 50%; */

  order: 0;
  flex: 0 50%;

  /* @media screen and (device-width: 320px) {
    flex: 0 45%;
  } */

  @media (max-width: 479px) {
    order: 0;
    flex: 0 40%;
  }
  /* @media (max-width: 779px) {
    display: inline-flex;
  } */
`;

const BlogDate = styled('p')`
  box-sizing: border-box;
  color: #636363;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 0.96rem;
  letter-spacing: 0.4px;
  line-height: 1.5;
  text-align: right;

  @media (max-width: 479px) {
    text-align: left;
  }
`;

const BlogPreview = ({ post, tag }) => {
  const _image = getImage(post.image?.sharp?.gatsbyImageData);
  // const _image = post.image.sharp.fluid;
  const { keywords, url } = useSiteMetadata();

  console.log(_image);

  // <div
  //   css={css`
  //     display: flex;
  //     justify-content: space-evenly;
  //     flex-direction: row-reverse;
  //     /* justify-items: center; */
  //     margin: auto;
  //     align-items: center;
  //     align-content: center;
  //     margin-left: 0;
  //     @media (max-width: 479px) {
  //       display: flex;
  //       justify-content: space-evenly;
  //       flex-direction: row-reverse;
  //       /* justify-items: center; */
  //       margin: auto;
  //       align-items: center;
  //       align-content: center;
  //       margin-left: 0;
  //       gap: 10px;
  //       width: max-content;
  //     }
  //   `}
  // >
  return (
    <>
      <Helmet>
        <html lang="en-US" />
        <title>Blog | Marlon V. Johnson</title>
        <meta name="description" content="Marlon V. Johnson blog posts" />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content="Blog | Marlon V. Johnson" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Marlon V. Johnson blog posts"
        />
        <meta property="og:image" content={post.image?.publicURL} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" href={url} />
        <link rel="canonical" href={url} />
      </Helmet>

      <Link to={post.slug} style={{ textDecoration: 'none' }}>
        <BlogWrapper>
          <BlogTitleContainer
            css={css`
              /* @media (max-width: 479px) {
              order: -1;
              flex: 1 0 100%;
            } */
            `}
          >
            <BlogTitle>{post.title}</BlogTitle>
          </BlogTitleContainer>
          <MainTagContainer>
            <InnerTagContainer>
              {tag?.map((tags, i) => {
                if (tags === 'Life') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        appearance: button;
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
                        appearance: button;
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

                        appearance: button;
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
                        appearance: button;
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
                        appearance: button;
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
                        appearance: button;
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
          {/* <Link
          to={post.slug}
          css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
          `}
          >
          <GatsbyImage
          // fluid={post.image.sharp.fluid}
          image={_image}
          // fadeIn={false}
          objectFit="contain"
          objectPosition={`50% 50%`}
          css={css`
          * {
            margin-top: 0;
          }
          border: 5px solid transparent;
          padding: 2px;
          border-color: #db99b9;
          border-radius: 2px;
          transition: none 0s ease 0s;
          `}
          alt={post.title}
          />
        </Link> */}
          <BlogDateContainer>
            <BlogDate>{post.date}</BlogDate>
          </BlogDateContainer>
          {/* </div> */}
          {/*
        <div>
          {/* 
            <p
            css={css`
            font-size: 18px;
            margin-top: 5px;
            overflow: hidden;
            `}
          >
            {post.excerpt}
          </p>
          {/* <small
            css={css`
              font-size: 80%;
              display: block;
              font-style: italic;
            `}
          >
            {post.date}
          </small> */}
          {/* <Readlink
          to={post.slug}
          css={css`
            display: flex;
            justify-content: flex-end;
            text-decoration: none;
            text-transform: uppercase;
          `}
        >
          read post &rarr;
        </Readlink> */}

          {/* </div> */}
        </BlogWrapper>
      </Link>
    </>
  );
};

export default BlogPreview;
