import React from 'react';

import { css } from '@emotion/react';
import { AboutFooter } from '../pages/about';
import GithubIcon from '../assets/icons8-github.svg';
import LinkedInIcon from '../assets/icons8-linkedin-circled.svg';
import TwitterIcon from '../assets/icons8-twitter-circled.svg';

const BlogFooter = () => {
  return (
    <div>
      <AboutFooter>
        <div
          css={css`
            display: flex;
            margin-top: 0px;
            padding-top: 80px;
            flex-direction: column;
            justify-content: space-between;

            align-items: center;

            @media (max-width: 479px) {
              max-width: none;
            }

            @media (max-width: 767px) {
              padding-top: 20px;
              max-width: none;
            }
          `}
        >
          <h2
            css={css`
              display: flex;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              padding-left: 0px;
              flex-direction: column;

              justify-content: space-between;
              color: #fff;
              font-size: 24px;
              font-weight: 600;
              text-align: center;

              @media (max-width: 479px) {
                font-size: 16px;
              }
            `}
          >
            Let's get in touch!
          </h2>

          <div
            css={css`
              position: static;
              right: 0px;
              display: flex;
              width: 700px;
              margin-left: 0px;
              justify-content: flex-start;

              align-items: center;

              @media (max-width: 767px) {
                width: auto;
                padding-left: 0px;
                justify-content: center;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                width: 248px;
                height: 50px;
                margin-top: 28px;
                margin-bottom: 0px;
                padding-bottom: 23px;
                justify-content: center;
                align-items: center;
                text-decoration: none;

                margin-left: auto;
                margin-right: auto;
              `}
            >
              <a
                href="mailto: johnsonmarlon18@gmail.com"
                css={css`
                  font-style: italic;
                  font-weight: 400;
                  color: #fff;
                  font-size: 16px;
                  text-decoration: none;
                  :hover,
                  :focus {
                    opacity: 0.2;
                  }
                `}
              >
                johnsonmarlon18@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            /* margin-top: 36px; */
            margin-bottom: 0px;
            padding-bottom: 100px;
            justify-content: center;
            align-items: center;
          `}
        >
          <a
            href="https://github.com/Mvrs"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              margin-top: 1rem;
            `}
          >
            <GithubIcon
              css={css`
                margin: 0 8px 0 0;
                padding-right: 0px;
                transform: perspective(1px) translateZ(0);
                transition-duration: 0.3s;
                transition-property: transform;

                &:hover,
                &:focus,
                &:active {
                  -webkit-transform: translateY(-8px);
                  transform: translateY(-8px);
                }
              `}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marvj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              css={css`
                margin: 0 8px 0 0;
                padding-right: 0px;
                transform: perspective(1px) translateZ(0);
                transition-duration: 0.3s;
                transition-property: transform;

                &:hover,
                &:focus,
                &:active {
                  -webkit-transform: translateY(-8px);
                  transform: translateY(-8px);
                }
              `}
            />
          </a>

          <a
            href="https://twitter.com/saschamars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              css={css`
                color: #fff;
                margin: 0 8px 0 0;
                padding-right: 0px;
                transform: perspective(1px) translateZ(0);
                transition-duration: 0.3s;
                transition-property: transform;

                &:hover,
                &:focus,
                &:active {
                  -webkit-transform: translateY(-8px);
                  transform: translateY(-8px);
                  outline: 0;
                }
              `}
            />
          </a>
        </div>
      </AboutFooter>
    </div>
  );
};

export default BlogFooter;
