import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import GithubIcon from '../assets/icons8-github.svg';
import LinkedInIcon from '../assets/icons8-linkedin-circled.svg';
import TwitterIcon from '../assets/icons8-twitter-circled.svg';
import MarlonLaptop from '../assets/marlon-laptop.svg';

const fadeCard = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const ImageContainer = styled('svg')`
  width: 405px;
  height: 330px;

  @media (max-width: 479px) {
    display: flex;
    margin-top: -40px;
    margin-bottom: 20px;
    /* zoom: 0.3; */
  }

  @media (max-width: 767px) {
    display: block;
    max-width: none;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    align-self: center;
    zoom: 0.7;
  }

  /** For later use */

  @media only screen and (min-width: 600px) {
    zoom: 0.8;
    height: 359px;
    margin-top: auto;
  }

  @media only screen and (min-width: 800px) {
    zoom: 1;
    height: 360px;
    margin-top: auto;
    margin-bottom: auto;
  }

  @media only screen and (min-width: 1000px) {
    zoom: normal;
  }
`;

const TextBackground = styled('div')`
  background-position: top 30% center;
  border-bottom: 0.5px solid #fff;
  display: flex;
  background-color: #ffffff;
  background-size: auto auto;
  + * {
    font-family: Averta, sans-serif;
    margin-top: 0;
  }
`;

const IntroContainer = styled('div')`
  display: flex;
  width: 80%;
  min-width: 900px;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;

  @media (max-width: 479px) {
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    min-width: 0px;
    margin-top: 40px;
    flex-direction: column-reverse;
    align-items: center;
    align-self: center;
  }

  /*** For later use */
  @media (max-width: 991px) {
    min-width: 0px;
    margin-top: 40px;
    flex-direction: column-reverse;
    align-items: center;
    align-self: center;
  }
`;

const IntroHeader = styled('div')`
  margin-left: 25px;
  padding-bottom: 36px;
`;

const IntroHeaderText = styled('h1')`
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 12px;
  margin-left: 0px;
  padding-right: 1px;
  font-family: Averta, sans-serif;
  color: #383a3f;
  font-size: 2.8vw;
  line-height: 140%;
  font-weight: 400;
  text-align: left;

  opacity: 0;
  animation: ${fadeCard} ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;

  @media (max-width: 479px) {
    font-size: 28px;
    line-height: 130%;
    font-weight: 400;
    margin-bottom: 0;
    text-align: center;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 767px) {
    width: 100vw;
    color: #383a3f;
  }
  @media (max-width: 991px) {
    width: 100vw;
    color: #383a3f;
    text-align: center;
  }
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
  width: 80px;
  height: 8px;
  margin-top: 25px;
  margin-bottom: 32px;
  border-radius: 5px;
  background-color: #2b90d9;

  opacity: 0;
  animation: ${fadeCard} ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;

  @media (max-width: 479px) {
    width: 60px;
    height: 6px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    margin-top: 20px;
  }

  @media (max-width: 991px) {
    display: flex;
    margin-right: auto;
    margin-left: auto;
  }
`;

const IconContainer = styled('div')`
  margin-top: 0px;
  padding-top: 24px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 479px) {
    margin: 0;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
  }
`;

const HeroContainer = styled('div')`
  display: flex;
  min-height: 78vh;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  font-size: 100px;

  @media (max-width: 991px) {
    min-height: 0vh;
  }
  @media (max-width: 767px) {
    min-height: auto;
  }
  @media (max-width: 479px) {
    min-height: auto;
  }
`;

const Intro = () => {
  return (
    <HeroContainer>
      <IntroContainer>
        <IntroHeader>
          <IntroHeaderText
            css={css`
              animation-delay: 0.4s;
            `}
          >
            Hello world,
            <br />
            my name is Marlon!
          </IntroHeaderText>
          <IntroStyleBar
            css={css`
              animation-delay: 0.8;
            `}
          />
          <IntroHeaderText
            css={css`
              animation-delay: 1.2s;
            `}
          >
            I'm a frontend engineer
            <br />
            in Oakland, CA.
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
            <div>
              <a
                href="https://github.com/Mvrs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  css={css`
                    /* margin-right: 8px; */
                    margin: 0 8px 0 0;
                    padding-right: 0px;
                    transform: perspective(1px) translateZ(0);
                    transition-duration: 0.5s;
                    transition-property: transform;

                    &:hover,
                    &:focus,
                    &:active {
                      -webkit-transform: translateY(-8px);
                      transform: translateY(-8px);
                    }
                  `}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/marvj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  css={css`
                    /* margin-right: 8px; */
                    margin: 0 8px 0 0;
                    padding-right: 0px;
                    transform: perspective(1px) translateZ(0);
                    transition-duration: 0.5s;
                    transition-property: transform;

                    &:hover,
                    &:focus,
                    &:active {
                      -webkit-transform: translateY(-8px);
                      transform: translateY(-8px);
                    }
                  `}
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/saschamars"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
            </div>
          </IconContainer>
        </IntroHeader>
        <ImageContainer>
          <MarlonLaptop
            css={css`
              width: 50vw;
              height: 50vh;
              /* width: 120px; */
              /* margin-bottom: 20px; */
              max-width: calc(33% - 1rem);
            `}
          />
        </ImageContainer>
      </IntroContainer>
    </HeroContainer>
  );
};

export default Intro;
