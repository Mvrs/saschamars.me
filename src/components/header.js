import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
// import { Link } from 'gatsby';
import Link from './link';
import MarlonJohnsonIcon from '../assets/marlon-johnson.svg';
import Container from './container';
import MobileNav from './mobile-nav';
import { bpMaxSM } from '../lib/breakpoints';
import Burger from './burger';

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

const HeaderLink = ({
  headerColor = 'black',
  activeClassName = 'current-page',
  ...props
}) => {
  return (
    <Link
      activeClassName={activeClassName}
      partiallyActive={true}
      css={css`
        text-decoration: none;
        color: ${headerColor};
      `}
      {...props}
    />
  );
};

export const NavLink = styled(Link)`
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

  & + & {
    margin-left: 10;
  }

  ${bpMaxSM} {
    display: none;
    &:last-of-type {
      display: none;
    }
  }
`;

const Header = ({
  headerLink = '/',
  maxWidth = 767,
  headerImage = true,
  headerColor = 'black',
}) => {
  return (
    <header
      css={css`
        font-weight: 600;
        background: #fff;
        flex-shrink: 0;
        z-index: 10;
        top: 0;
        /* padding: 1rem calc((100vw - 950px - 3.5rem) / 2); */
        padding: 0.5rem calc((100vw - 800px - 0.5rem) / 2);
        /* padding: 30px 0 0 0; */
        ${bpMaxSM} {
          padding: 20px 0 0 0;
        }

        @media (max-width: 1023px) {
          padding: 0.5rem calc((100vw - 650px - 0.5rem) / 2);
        }
      `}
    >
      <Container maxWidth={maxWidth} noVerticalPadding>
        <nav
          css={css`
            margin-top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <HeaderLink
            to={headerLink}
            aria-label="go to homepage"
            activeClassName="none"
            css={css`
              display: inline-flex;
              align-items: center;
              justify-content: flex-start;
              color: #2b90d9;
              &:hover,
              &:focus,
              &:active {
                transform: unset;
                transition-duration: unset;
                animation: unset;
              }
              span {
                transform: ${headerImage} && 'translateX(60px)';
              }
            `}
          >
            <MarlonJohnsonIcon
              aria-label="Marlon V. Johnson"
              css={css`
                margin-bottom: 10px;
              `}
            />
            marlon v. johnson
          </HeaderLink>

          <div
            css={css`
              font-size: 1rem;
              line-height: 1.25;
              display: flex;
              align-items: center;
              .mobile-nav {
                display: none;
                visibility: hidden;
                ${bpMaxSM} {
                  display: block;
                  margin-bottom: 10px;
                  padding-right: 10px;
                  display: inline-flex;
                  align-items: center;
                  justify-content: flex-start;
                  /* padding-right: 20px; */
                  visibility: visible;
                }
              }
            `}
          >
            <MobileNav color={headerColor} />

            <NavLink to="/" activeClassName="current-page">
              home
            </NavLink>
            <NavLink to="/blog/" activeClassName="current-page">
              blog
            </NavLink>
            <NavLink
              to="/about/"
              aria-label="View about page"
              activeClassName="current-page"
            >
              about
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
