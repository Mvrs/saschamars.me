import React from 'react';

import Footer from '../components/footer/footer';
import Intro from '../components/intro';
import Layout from '../components/layout';

const Home = () => {
  return (
    <>
      <Layout>
        <Intro />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;