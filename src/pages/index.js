import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Insta from '../components/insta';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import Intro from '../components/intro';
import { StyleBar } from '../components/intro';
import { css } from '@emotion/core';
import Skills from '../components/skills';
import Work from '../components/work'

export default () => {
  const posts = usePosts();

  return (
    <>
      <Layout>
        {/* Intro will go here*/}
        <Intro />

        {/* <h2
          css={css`
            display: flex;
            margin: 1.25rem 1.25rem 0.75rem 1rem;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            font-size: 31px;
            font-weight: 400;
          `}
        >
          my skills
        </h2>
        <StyleBar /> */}
        <Skills />
        <Work/>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
