import { css } from '@emotion/react';
import React from 'react';

import projects from '../../content/data/projects';
import Footer from '../components/footer/footer';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Project from '../components/projects/project';
import { bpDesktopOnly } from '../lib/breakpoints';

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
              /* font-size: 2rem; */
              ${bpDesktopOnly} {
                font-size: 2.25rem;
              }
            `}
          >
            Projects
          </h1>
          <div
            css={css`
              margin-top: 1.5rem;
              ${bpDesktopOnly} {
                font-size: 1.238rem;
              }
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