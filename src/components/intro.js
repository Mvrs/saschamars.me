import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TextBackground = styled('div')`
  background-position: top 30% center;
  border-bottom: 0.5px solid #fff;
  display: flex;
  /* padding: 1rem calc((90vw - 950px - 3.5rem) / 2); */
  /* width: 64vw; */
  /* height: 500px; */
  background-color: #fffff3;
  /* padding-top: 0; */
  /* background-size: cover; */
  /* height: 50vh; */
  /* width: 100vw; */
  /* margin-top: -37px; */
  /* flex-grow: 1; */
  background-size: auto auto;

  /* + * {
font-family: Averta, sans-serif;
    margin-top: 0;
  } */
`;

const IntroContainer = styled('div')`
  /* padding: 1rem calc((90vw - 650px) / 2); */
  width: 480px;
  height: 50vh;
  justify-content: center;
  margin: auto;
  font-size: 14px;
`;

const IntroHeader = styled('h1')`
  display: flex;

  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  margin: 4.25rem 0 0 1rem;
  /* margin: 0; */
  justify-content: center;
  padding: 0 0 10px;
  font-size: 40px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 5.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: #383a3f;
  font-weight: 400;
  /* position: static; */
  /* word-wrap: break-word; */
`;

export const StyleBar = styled('div')`
  width: 80px;
  height: 4px;
  margin: auto;
  border-radius: 5px;
  background-color: #2b90d9;
`;

const Intro = () => {
  return (
    <TextBackground Tag="section">
      <IntroContainer>
        <IntroHeader>Marlon Johnson</IntroHeader>
        {/* <StyleBar />
        <IntroHeader>I'm a Frontend Engineer in Berkeley, CA</IntroHeader> */}
        <h2
          css={css`
            display: flex;
            margin: auto;
            padding: 0 0 10px;
            justify-content: center;
            font-size: 12px;
            font-weight: 500;
            line-height: 1.5;
            letter-spacing: 3.5px;
            text-transform: uppercase;
            opacity: 0.7;
          `}
        >
          FrontEnd Engineer
        </h2>
      </IntroContainer>
    </TextBackground>
  );
};

export default Intro;
