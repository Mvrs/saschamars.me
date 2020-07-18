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
  /* width: 45%; */
  width: 405px;
  height: 330px;
  max-width: 45%;

  @media (max-width: 479px) {
    /* width: 120px; */
    /* margin-bottom: 20px; */
    /* max-width: calc(33% - 1rem); */
    /* top: -18px; */
    display: flex;
    margin-top: -40px;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    display: block;
    /* width: 110vw; */
    max-width: none;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    zoom: 0.7;
  }
  /* 
  @media (max-width: 991px) {
    display: block;
    width: 70vw;
    max-width: none;
    margin-right: 0px;
    margin-bottom: 40px;
    margin-left: 0px;
    padding-top: 20px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  } */

  /* 
  margin: 0 0 20 0;
  width: 50%;
  max-width: 50%; */

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

  @media (max-width: 479px) {
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    min-width: 0px;
    margin-top: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }
  /* 
  @media (max-width: 991px) {
    min-width: 0px;
    margin-top: 60px;
    margin-right: 0px;
    margin-left: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  } */
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
  /* height: auto; */
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
  /* 
  @media (max-width: 991px) {
    display: block;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 10px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    color: #2b90d9;
    font-weight: 400;
    text-align: center;
  } */

  /* height: auto;
  margin-top: 0px;
  display: block;
  margin-bottom: 12px;
  margin-left: 0px;

  margin-right: 150px;
  padding-right: 1px;
  font-family: Averta, sans-serif;
  font-size: 2.6vw;
  line-height: 140%;
  font-weight: 400;
  text-align: left; */
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
  /* margin-top: 0px;
  padding-top: 12px;
  display: flex;
  justify-content: center; */
`;

// const Icon = styled('div');

const HeroContainer = styled('div')`
  display: flex;
  min-height: 78vh;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  font-size: 100px;

  @media (max-width: 1024px) {
    min-height: 50vh;
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
            Hey, peoples
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
