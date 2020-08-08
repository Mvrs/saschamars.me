import React from 'react';

import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
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
