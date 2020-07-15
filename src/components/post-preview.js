import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Readlink from '../components/read-link';
import { PostLayout } from '../components/post-layout';
import {
  MainTagContainer,
  TagName,
  TagContainer,
  InnerTagContainer,
} from './tag-layout';

import '../styles/tag.module.css';

const PostPreview = ({ post, tag }) => {
  tag.map((tags, i) => console.log(`[${i}]: ${tags}`));

  console.log(post.excerpt);

  return (
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
            text-decoration: none;
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
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
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
            {tag.map((tags, i) => {
              if (tags === 'Life')
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
              else if (tags === 'React')
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
              else if (tags === 'Programming')
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
            })}
          </InnerTagContainer>
        </MainTagContainer>
        <p>{post.excerpt}</p>
        <Readlink to={post.slug}>read this post &rarr;</Readlink>
      </div>
    </article>
  );
};

export default PostPreview;
