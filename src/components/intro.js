import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import GithubIcon from '../assets/icons8-github.svg'
import LinkedInIcon from '../assets/icons8-linkedin-circled.svg'
import TwitterIcon from '../assets/icons8-twitter-circled.svg'

const TextBackground = styled('div')`
  background-position: top 30% center;
  border-bottom: 0.5px solid #fff;
  display: flex;
  /* padding: 1rem calc((90vw - 950px - 3.5rem) / 2); */

  background-color: #ffffff;

  background-size: auto auto;

  + * {
font-family: Averta, sans-serif;
    margin-top: 0;
  }
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
    /* width: 64px; */
    height: 8px;
  border-radius: 8px;
  position: static;
    left: 0px;
    top: 0px;
    display: block;
    width: 88px;
    height: 6px;
    flex: 0 auto;
    text-align: center;
  background-color: #2b90d9;
`;

const IconContainer = styled('div')`
    margin-top: 0px;
    padding-top: 12px;
    display: flex;
    justify-content: center;
`


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
        <IconContainer>
        <GithubIcon css={css`
        /* margin-right: 8px; */
        margin: 0 8px 0 0;
    padding-right: 0px;
        
        `} />
        <LinkedInIcon css={css`
          /* margin-right: 8px; */
          margin: 0 8px 0 0;
    padding-right: 0px;
        `}/>
        <TwitterIcon css={css`
          /* margin-right: 8px; */
          margin: 0 8px 0 0;
    padding-right: 0px;
        
        `} />
        </IconContainer>

      </IntroContainer>
    </TextBackground>
  );
};

export default Intro;
