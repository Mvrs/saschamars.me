import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import useTags from '../hooks/use-tags';
import { PostLayout } from '../components/post-layout';
import Footer from '../components/footer';

function Search({ location }) {
  const query =
    (location.state && location.state.query) ||
    location.pathname.replace(/^\/blog\/?/, '') ||
    '';

  const post_title = query.replace('/-+/g', ' ');
}

export default () => {
  const posts = usePosts();
  const tags = useTags();

  return (
    <>
      <Layout>
        {/* <h1
          css={css`
            text-align: center;
            display: block;
            position: relative;
          `}
        >
          Welcome to all my Blog Posts
        </h1> */}
        {/* <p
          css={css`
            text-align: center;
            display: block;
            position: relative;
          `}
        >
          This is where all my blogs will be
        </p> */}
        <PostLayout>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} tag={post.tags} />
          ))}
        </PostLayout>
        <Footer />
      </Layout>
    </>
  );
};
