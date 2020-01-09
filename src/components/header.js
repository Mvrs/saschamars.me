import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import MarlonJohnsonIcon from '../assets/marlon-johnson.svg';

// const bounce = keyframes({
//   from: {
//     transform: ['translate3d(0px, 0px, 0px)', 'scale3d(1,1,1)'],
//     transformStyle: 'preserve-3d',
//   },
//   to: {
//     transform: ['translate3d(0px, 0px, 0px)', 'scale3d(1.1, 1.1, 1)'],
//     transformStyle: 'preserve-3d',
//     willChange: 'transform',
//   },
// });

const grow = keyframes`

  to {

    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
    transition-duration: 1s;
    transition-property: transform;
    transformStyle: preserve-3d;

  }

  from {

    transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1);
    transition-duration: 1s;
    transition-property: transform;
    transformStyle: preserve-3d;
  }

`;

const NavLink = styled(Link)`
  color: #383a3f;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 600};
  line-height: 1;
  margin: 0 1rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  float: 'right';

  &.current-page {
    border-bottom: 2px solid #2b90d9;
  }

  &:last-of-type {
    margin-right: 0;
    display: inline-flex;
    align-items: center;
  }
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
    transition-duration: 0.4s;
    /* outline: 0; */
    /* font-size: 1.1rem; */
    animation: ${grow} ease;
  }
`;

const Header = () => (
  <header
    css={css`
      font-weight: 600;
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding: 1rem calc((100vw - 950px - 3.5rem) / 2);
      align-items: center;
    `}
  >
    <NavLink
      to="/"
      style={{
        marginLeft: '15px',
        color: '#2b90d9',
        // all: 'unset',
        // display: 'inline-flex',
        // alignItems: 'center',
      }}
      css={css`
        &:hover,
        &:focus,
        &:active {
          transform: unset;
          transition-duration: unset;
          animation: unset;
        }
      `}
    >
      <MarlonJohnsonIcon
        css={css`
          margin-bottom: 10px;
        `}
      />
      marlon von johnson
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
        display: inline-flex;
        align-items: center;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        home
      </NavLink>
      <NavLink to="/blog/" activeClassName="current-page">
        blog
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        about
      </NavLink>
      <NavLink to="/work/" activeClassName="current-page">
        work
      </NavLink>
      <NavLink to="/projects/" activeClassName="current-page">
        projects
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        contact
      </NavLink>
    </nav>
    {/* navigation */}
  </header>
);

export default Header;
