import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import Link from './link';
import MarlonJohnsonIcon from '../assets/marlon-johnson.svg';
import Container from './container';
import MobileNav from './mobile-nav';
import { bpMaxSM } from '../lib/breakpoints';

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
      partiallyActive
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
  font-weight: ${(props) => props.fontWeight || 600};
  line-height: 1;
  margin: 0 1rem 0 0;
  padding: 0.5rem 0.7rem;
  text-decoration: none;
  float: 'right';

  &.current-page {
    /* border-bottom: 2px solid #2b90d9; */
    background-color: #f5f5f5;
    border-radius: 6px;
  }

  &:last-of-type {
    margin-right: 0;
    display: inline-flex;
    align-items: center;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: #f5f5f5;
    border-radius: 6px;

    /* transform: scale(1.1); */
    /* transition-duration: 0.4s; */
    /* outline: 0; */
    /* font-size: 1.1rem; */
    /* animation: ${grow} ease; */
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
  maxWidth = 850,
  headerImage = true,
  headerColor = 'black',
}) => {
  return (
    <header
      css={css`
        font-weight: 700;
        background: #f4f4f4;
        flex-shrink: 0;
        z-index: 10;
        top: 0;
        /* padding: 1rem calc((100vw - 950px - 3.5rem) / 2); */
        padding: 0.5rem calc((100vw - 950px - 0.5rem) / 2);
        /* padding: 30px 0 0 0; */
        /* ${bpMaxSM} {
          padding: 20px 0 0 0;
        } */

        @media screen and (min-width: 1200px) {
          padding: 0.5rem calc((100vw - 70% - 0.5rem) / 2);
          margin: 0 auto;
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
              margin-left: -20px;
              padding-left: 5px;
              justify-content: flex-start;
              color: #2b90d9;

              @media (max-width: 767px) {
                display: inline-flex;
                align-items: center;
                justify-content: flex-start;
                color: #2b90d9;
              }

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
              margin-top: 0;
              align-items: center;
              .mobile-nav {
                display: none;
                visibility: hidden;
                ${bpMaxSM} {
                  display: block;
                  margin-bottom: 10px;
                  padding-right: 10px;
                  margin-top: 0.75rem;
                  margin-right: 3px;
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
            {/* eslint-disable-next-line */}
            <NavLink
              to="/blog"
              rel="noopener noreferrer"
              activeClassName="current-page"
            >
              😅 Blog Coming Soon
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
