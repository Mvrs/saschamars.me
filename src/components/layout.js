import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

import WrapRootElement from '../../gatsby-browser';
const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: Averta, sans-serif;
            background-color: #fafafc;

            font-size: 18px;
            line-height: 1.4rem;

            /* remove margin for the main dive that Gatsby mounts into */

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }

            pre {
              border-radius: 0.25rem;
              font-family: Operator Mono, 'Lucida Sans', 'Lucida Sans Regular',
                'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
                sans-serif;
              line-height: 1.55rem;
              overflow: hidden;
              padding: 0.625rem;
              font-size: 0.875rem;
            }

            code {
              color: #c5c8c6;
              white-space: pre;
              background-color: #1d1f21;
              border-radius: 0.3em;
              padding: 0.1em;
              font-family: SFMono-Regular, Menlo, Monaco, Consolas,
                'Liberation Mono', 'Courier New', monospace;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {/* <header></header> */}
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 950px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
