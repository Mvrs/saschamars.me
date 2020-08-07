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
