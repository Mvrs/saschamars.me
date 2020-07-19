import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Container from './container';
import { bpMaxSM } from '../lib/breakpoints';

const Toggle = ({ color = 'black' }) => {
  const [isToggleOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggleOn);

  return (
    <div className="mobile-nav">
      <button
        onClick={toggle}
        aria-label={`${isToggleOn ? 'close menu' : 'open menu'}`}
        css={css`
          z-index: 30;
          top: -5px;
          position: relative;
          background: transparent;
          border: none;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 2px;
            background: ${color};
            position: absolute;
            left: 0;
            ${isToggleOn ? 'background: transparent' : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${isToggleOn ? 'blue' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggleOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 24px;
              height: 2px;
              margin-top: 0;
              background: ${isToggleOn ? 'blue' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggleOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: roate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggleOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: -18px;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: #2b90d9;
          `}
        >
          <Container
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              a {
                color: white;
                font-size: 22px;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                :hover {
                  background: rgba(0, 0, 0, 0.2);
                }
              }
              .current-page {
                background: rgba(0, 0, 0, 0.2);
              }
            `}
          >
            <Link
              aria-label="Go back home"
              to="/"
              activeClassName="current-page"
            >
              home
            </Link>
            <Link
              aria-label="View blog page"
              to="/blog"
              activeClassName="current-page"
            >
              blog
            </Link>

            <Link
              aria-label="View about page"
              to="/about"
              activeClassName="current-page"
            >
              about
            </Link>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Toggle;
