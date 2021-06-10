import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const Footer = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState('');
  const [instructions, setInstructions] = useState('');
  const email = 'johnsonmarlon18@gmail.com';

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`${email} copied to clipboard`);
    setInstructions('');
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(`click to copy ${email}`);
  }

  function hideInstruction() {
    setInstructions('');
  }

  return (
    <footer
      css={css`
        justify-content: center;
        display: flex;
        flex-direction: row;
        margin-top: 6rem;
      `}
    >
      <div
        css={css`
          position: absolute;
          font-size: 0.9rem;
          margin-top: -1.1rem;
          margin-left: -3rem;
          justify-content: left;
        `}
      >
        {copySuccessMessage} {instructions}
      </div>
      <ul
        css={css`
          padding: 0;
          display: flex;
          flex-direction: row;
          margin-left: -0.3rem;
        `}
      >
        <li
          css={css`
            display: inline;
            list-style: none;
            margin: 0;
          `}
        >
          {/* eslint-disable-next-line */}
          <a
            css={css`
              padding: 1rem;
              border-radius: 6px;
              text-decoration: none;
              color: #6e6e6e;
              background: transparent;
              font-weight: 400;

              &:hover {
                border-radius: 6px;
                color: #222;
                cursor: pointer;
                background: whitesmoke;
              }
            `}
            onClick={copyEmail}
            onMouseOver={showInstruction}
            onFocus={showInstruction}
            onMouseOut={hideInstruction}
          >
            Email
          </a>
        </li>

        <li
          css={css`
            display: inline;
            list-style: none;
            margin: 0;
          `}
        >
          <a
            css={css`
              padding: 1rem;
              border-radius: 6px;
              text-decoration: none;
              color: #6e6e6e;
              background: transparent;
              font-weight: 400;

              &:hover {
                border-radius: 6px;
                color: #222;
                cursor: pointer;
                background: whitesmoke;
              }
            `}
            href="https://github.com/Mvrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>

        <li
          css={css`
            display: inline;
            list-style: none;
            margin: 0;
          `}
        >
          <a
            css={css`
              padding: 1rem;
              border-radius: 6px;
              text-decoration: none;
              color: #6e6e6e;
              background: transparent;
              font-weight: 400;

              &:hover {
                border-radius: 6px;
                color: #222;
                cursor: pointer;
                background: whitesmoke;
              }
            `}
            href="https://twitter.com/saschamars"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>

        <li
          css={css`
            display: inline;
            list-style: none;
            margin: 0;
          `}
        >
          <a
            css={css`
              padding: 1rem;
              border-radius: 6px;
              text-decoration: none;
              color: #6e6e6e;
              background: transparent;
              font-weight: 400;

              &:hover {
                border-radius: 6px;
                color: #222;
                cursor: pointer;
                background: whitesmoke;
              }
            `}
            href="https://www.linkedin.com/in/marvj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
