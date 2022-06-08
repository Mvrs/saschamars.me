import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import Header from './header';
import { Code } from './mdx/code';
import useSiteMetadata from '../hooks/use-sitemetadata';
import '../styles/layout.css';

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  },
};

function Layout({ children }) {
  // eslint-disable-next-line object-curly-newline
  const { title, description, keywords, url } = useSiteMetadata();

  return (
    <MDXProvider components={components}>
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

            hr {
              border-top-style: initial;
              border-right-style: initial;
              border-left-style: initial;
              padding: 0px;
              margin: -1px 0px 24px;
              border-width: 0px 0px 1px;
              border-image: initial;
              border-bottom: 1px solid rgb(204, 204, 204);
              border-color: rgb(204, 204, 204);
            }
            /* a {
              background-image: linear-gradient(transparent 70%, #dbe4ff 0);
              box-sizing: border-box;
              color: #2a5aa7;
              cursor: pointer;
              font-family: Roboto, sans-serif;
              font-weight: 700;
              letter-spacing: 0.4px;
              line-height: 24px;
              text-align: left;
              text-decoration: none;
            } */

            blockquote {
              border-left: 5px solid rgb(87, 62, 222);
              font-style: italic;
              padding-left: 1rem !important;
              margin-left: 0px !important;
              margin-right: 0px !important;
            }


/* 
            pre {
              font-family: Operator Mono, SFMono-Regular, Menlo, Monaco,
                Consolas, 'Liberation Mono', 'Courier New', monospace sans-serif;
              line-height: 1.55rem;
              overflow: auto;
              font-size: 0.875rem;
              white-space: pre;
  
            } */

            code {
              white-space: pre;
              border-radius: 0.3em;
              /* background: rgba(255, 229, 100, 0.2); */
              font-weight: 600;
              font-size: 0.875em;
              color: #1a1a1a;
              padding: 0.15em 0.2em 0.05em;
              white-space: normal;
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
              /* @media (max-width: 767px) {
                font-size: 16px;
              } */
            }

            :not(pre) > code[class*='language-'] {
              /* border-radius: 0.3em; */
              background: rgba(255, 229, 100, 0.2);
              color: #1a1a1a;
              padding: 0.15em 0.2em 0.05em;
              white-space: normal;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" href={url} />
        <link rel="canonical" href={url} />
      </Helmet>
      {/* <header></header> */}
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 950px;

          @media (min-height: 1024px) {
            margin: 0 auto;
            padding: 0 0.7rem;
            max-width: 88vw;
            width: 950px;
          }
        `}
      >
        {children}
      </main>
    </MDXProvider>
  );
}

export default Layout;
