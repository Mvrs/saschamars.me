import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import GithubIcon from '../assets/icons8-github.svg';
import LinkedInIcon from '../assets/icons8-linkedin-circled.svg';
import TwitterIcon from '../assets/icons8-twitter-circled.svg';
import MarlonLaptop from '../assets/marlon-laptop.svg';

const ImageContainer = styled('div')`
  margin: 0 0 20 0;
  width: 50%;
  max-width: 50%;
  align-self: center;
  vertical-align: middle;
  /* display: inline-block; */
`;

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

// const IntroContainer = styled('div')`
//   /* padding: 1rem calc((90vw - 650px) / 2); */
//   width: 480px;
//   min-height: 78vh;
//   justify-content: center;
//   margin: auto;
//   font-size: 14px;
// `;
const IntroContainer = styled('div')`
  /* padding: 1rem calc((90vw - 650px) / 2); */
  display: flex;
  width: 80%;
  min-width: 900px;
  /* margin-top: 1vh; */
  flex-direction: row;
  justify-content: space-around;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  align-items: center;
  align-self: center;
  /* width: 480px; */
  /* min-height: 78vh; */
  /* justify-content: center; */
  /* margin: auto; */
  /* font-size: 14px; */
`;

// const IntroHeader = styled('h1')`
//   display: flex;

//   /* flex-direction: column; */
//   /* flex-wrap: wrap; */
//   margin: 4.25rem 0 0 1rem;
//   /* margin: 0; */
//   justify-content: center;
//   padding: 0 0 10px;
//   font-size: 40px;
//   font-weight: 300;
//   line-height: 1.2;
//   letter-spacing: 5.5px;
//   text-transform: uppercase;
//   text-decoration: none;
//   color: #383a3f;
//   font-weight: 400;
//   /* position: static; */
//   /* word-wrap: break-word; */
// `;
const IntroHeader = styled('div')`
  /* display: flex; */
  margin-left: 0px;
  padding-bottom: 36px;

  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* margin: 4.25rem 0 0 1rem; */
  /* margin: 0; */
  /* justify-content: center;
  padding: 0 0 10px;
  font-size: 40px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 5.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: #383a3f;
  font-weight: 400; */
  /* position: static; */
  /* word-wrap: break-word; */
`;

const IntroHeaderText = styled('h1')`
  height: auto;
  margin-top: 0px;
  display: block;
  margin-bottom: 12px;
  margin-left: 0px;

  margin-right: 150px;
  padding-right: 1px;
  font-family: Averta, sans-serif;
  color: #383a3f;
  font-size: 2.6vw;
  line-height: 140%;
  font-weight: 400;
  text-align: left;
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

const IntroStyleBar = styled('div')`
  /* width: 64px; */
  width: 80px;
  height: 8px;
  margin-top: 25px;
  margin-bottom: 32px;
  border-radius: 5px;
  background-color: #2b90d9;
`;

const IconContainer = styled(Link)`
  margin-top: 0px;
  padding-top: 24px;
  display: flex;
  /* margin-top: 0px;
  padding-top: 12px;
  display: flex;
  justify-content: center; */
`;

const HeroContainer = styled('div')`
  display: flex;
  min-height: 78vh;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const Intro = () => {
  return (
    <HeroContainer>
      <IntroContainer>
        <IntroHeader>
          <IntroHeaderText>Sup, my name is Marlon</IntroHeaderText>
          <IntroStyleBar />
          <IntroHeaderText>
            I'm a Frontend Engineer in Berkeley, CA
          </IntroHeaderText>
          {/* <h2
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
        </h2> */}
          <IconContainer>
            <GithubIcon
              css={css`
                /* margin-right: 8px; */
                margin: 0 8px 0 0;
                padding-right: 0px;
                transform: perspective(1px) translateZ(0);
                transition-duration: 0.3s;
                transition-property: transform;

                &:hover,
                &:focus,
                &:active {
                  transform: translateY(-8px);
                }
              `}
            />
            <LinkedInIcon
              css={css`
                /* margin-right: 8px; */
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
            <TwitterIcon
              css={css`
                /* margin-right: 8px; */
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
          </IconContainer>
        </IntroHeader>
        <ImageContainer>
          <MarlonLaptop />
        </ImageContainer>
      </IntroContainer>
    </HeroContainer>
  );
};

export default Intro;
