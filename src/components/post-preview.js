import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Readlink from '../components/read-link';
import { PostLayout } from '../components/post-layout';

const PostPreview = ({ post, tag }) => (
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
      <p>{post.excerpt}</p>
      <p >{post.tags}</p>
      <Readlink to={post.slug}>read this post &rarr;</Readlink>
    </div>
  </article>
);

export default PostPreview;
