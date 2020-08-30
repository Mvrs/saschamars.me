import React from 'react';
import { css } from '@emotion/core';

const Footer = () => (
  <footer
    css={css`
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: 48px;
      font-size: 16px;
      color: gray;
      opacity: 0.4;
    `}
  >
    © 2020 · Marlon Johnson
  </footer>
);

export default Footer;
