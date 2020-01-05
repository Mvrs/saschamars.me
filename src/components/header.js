import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

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
    `}
  >
    <NavLink to="/" style={{ marginLeft: '15px' }}>
      Marlon V. Johnson
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
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
