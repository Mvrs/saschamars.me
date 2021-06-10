import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Helmet from 'react-helmet';

import Readlink from './read-link';
import {
  MainTagContainer,
  TagName,
  TagContainer,
  InnerTagContainer,
} from './tag-layout';

import '../styles/tag.module.css';
import useSiteMetadata from '../hooks/use-sitemetadata';

const PostPreview = ({ post, tag }) => {
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

      <article
        css={css`
          background-color: #fff;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
          margin: 20px;
          padding: 30px 30px 60px;
          position: relative;
          width: 320px;
          :first-of-type {
            margin-top: 1rem;
          }
        `}
      >
        <>
          <h2
            css={css`
              color: #090707;
              text-decoration: none;
              font-family: Montserrat, sans-serif;
              font-size: 24.2515px;
              font-weight: 600;
              line-height: 1.1;
              text-rendering: optimizelegibility;
              /* position: relative; */
              margin: 0 5px 10px 0;
            `}
          >
            {post.title}
          </h2>
        </>
        <Link
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
        </Link>
        <div>
          <MainTagContainer
            css={css`
              color: #37352f;
            `}
          >
            <InnerTagContainer>
              {tag?.map((tags, i) => {
                if (tags === 'Life') {
                  return (
                    <TagContainer
                      key={i}
                      css={css`
                        background: #6724de;
                        opacity: 0.2;
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

          <p
            css={css`
              font-size: 18px;
              margin-top: 5px;
              overflow: hidden;
            `}
          >
            {post.excerpt}
          </p>
          <small
            css={css`
              font-size: 80%;
              display: block;
              font-style: italic;
            `}
          >
            {post.date}
          </small>
          <Readlink
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
        </div>
      </article>
    </>
  );
};

export default PostPreview;
