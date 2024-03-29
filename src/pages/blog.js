import styled from '@emotion/styled';
import React, { useState } from 'react';
import { BlogContainer } from '../components/blog/blog-container';
import PostPreview from '../components/blog/blog-preview';
import Footer from '../components/footer';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

const BlogHeader = styled('header')`
  box-sizing: border-box;
  color: #222;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.4px;
  line-height: 18.4px;
  text-align: center;
`;

const BlogTitle = styled('h1')`
  box-sizing: border-box;
  color: #343a40;
  font-family: Roboto, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  line-height: 46px;
  text-align: center;
`;

const BlogDescription = styled('p')`
  box-sizing: border-box;
  color: #60656c;
  font-family: Roboto, sans-serif;
  font-size: 1.3rem;
  letter-spacing: 0.4px;
  line-height: 1.5;
  text-align: center;
  margin-top: 1rem;
`;

// const BlogForm = styled(`form`);
const BlogInput = styled('input')`
  border-color: #ccc;
  border-radius: 6px;
  border-radius: 6px;
  border-style: solid;
  box-sizing: border-box;
  color: #000;
  cursor: text;
  font-family: Roboto, sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 1rem 0 2rem;
  padding: 6px;
  width: 70%;
  text-overflow: ellipsis;
`;

const Blog = () => {
  let posts = usePosts();
  const allPosts = posts;

  const emptyQuery = '';

  const [state, setState] = useState({
    filterData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const _posts = allPosts || [];

    const filteredData = _posts.filter((post) => {
      const { title, tags } = post;
      return (
        // eslint-disable-next-line operator-linebreak
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join('').toLowerCase().includes(query.toLowerCase()))
      );
    });

    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  posts = hasSearchResults ? filteredData : allPosts;

  return (
    <>
      <Layout>
        <BlogContainer>
          <BlogHeader>
            <BlogTitle>Blog</BlogTitle>
            <BlogDescription>
              Just some cool shit about React, JavaScript, and what I find
              insightful.
            </BlogDescription>
            <form>
              <BlogInput
                type="text"
                onChange={handleInputChange}
                placeholder="Find blogs on topics you're interested in"
              />
            </form>
          </BlogHeader>
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} tag={post.tags} />
          ))}
        </BlogContainer>
        <Footer />
      </Layout>
    </>
  );
};

export default Blog;
