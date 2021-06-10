import React from 'react';
import { css } from '@emotion/react';

import projects from '../../content/data/projects';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Project from '../components/projects/project';
import Footer from '../components/footer/footer';

const Home = () => {
  return (
    <>
      <Layout>
        <Intro />

        <section>
          <h1
            css={css`
              padding-top: 2.5rem;
              padding-bottom: 0.2rem;
              border-bottom: 4px solid #f1f4f8;
              color: #343a40;
              font-size: 2rem;
            `}
          >
            Projects
          </h1>
          <div
            css={css`
              margin-top: 1.5rem;
            `}
          >
            {projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
