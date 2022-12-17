import PropTypes from 'prop-types';
import React from 'react';

import { css } from '@emotion/react';
import { bpDesktopOnly } from '../../lib/breakpoints';
import './projects.css';

const Projects = ({ project }) => {
  const {
    title, description, code, live
  } = project;

  return (
    <div key={title}>
      <section className="container_project">
        <div className="title_description_container"

        >
          <a
            className="project_title"
            href={live}
            target="_blank"
            rel="noopner noreferrer"
            css={css`
              ${bpDesktopOnly} {
                font-size: 1.406rem;
                }
            `}


          >
            {title}
          </a>
          <div className="project_description"
            css={css`
              ${bpDesktopOnly} {
                font-size: 1.125rem;
                }
            `}
          >{description}</div>
        </div>
        <div className="code_link_container">
          <a
            className="code_link"
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </section>
    </div>
  );
};

Projects.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    code: PropTypes.string,
    live: PropTypes.string,
  }),
};

export default Projects;
