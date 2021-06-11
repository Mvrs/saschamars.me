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
  font-family: Roboto, sans-serif;
  letter-spacing: 0.4px;
  line-height: 18.4px;
  margin-left: -0.7rem;
  padding: 0 0.7rem;

  :hover {
    background-color: #f5f5f5;
    border-radius: 6px;
  }
`;

const BlogTitleContainer = styled('div')`
  box-sizing: border-box;
  color: #222;
  cursor: pointer;
  flex: 3;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.4px;
  line-height: 18.4px;
  margin-right: 1rem;
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
  flex: 1;
  letter-spacing: 0.4px;
  line-height: 18.4px;
  margin-top: 0.5rem;
  text-align: right;
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
`;

const BlogPreview = ({ post, tag }) => {
  const _image = getImage(post.image.sharp.gatsbyImageData);
  // const _image = post.image.sharp.fluid;
  const { keywords, url } = useSiteMetadata();

  console.log(_image);

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
        <meta property="og:image" content={post.image.publicURL} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" href={url} />
        <link rel="canonical" href={url} />
      </Helmet>

      <BlogWrapper>
        <BlogTitleContainer>
          <BlogTitle>{post.title}</BlogTitle>
          <MainTagContainer
            css={css`
              /* color: #37352f; */
            `}
          >
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
                if (tags === 'React') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        background: #0078df;
                        opacity: 0.4;
                        color: #fff;
                      `}
                    >
                      <TagName css={css``}>{tags}</TagName>
                    </TagContainer>
                  );
                }
                if (tags === 'Programming') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        background: #00876b;
                        opacity: 0.4;
                        color: #fff;
                      `}
                    >
                      <TagName
                        css={css`
                          font: 500;
                        `}
                      >
                        {tags}
                      </TagName>
                    </TagContainer>
                  );
                }
              })}
            </InnerTagContainer>
          </MainTagContainer>
        </BlogTitleContainer>
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
          </Readlink>
        */}
        {/* </div> */}
      </BlogWrapper>
    </>
  );
};

export default BlogPreview;
