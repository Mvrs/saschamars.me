import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import MarlonLaptop from '../assets/marlon-laptop.svg';
import { bpMaxSM } from '../lib/breakpoints';

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

// const TextBackground = styled('div')`
//   background-position: top 30% center;
//   border-bottom: 0.5px solid #fff;
//   display: flex;
//   background-color: #ffffff;
//   background-size: auto auto;
//   + * {
//     font-family: Averta, sans-serif;
//     margin-top: 0;
//   }
// `;

const IntroContainer = styled('div')`
  display: flex;
  /* width: 80%; */
  min-width: 850px;
  margin-top: 20px;
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
  padding-bottom: 36px;
  /* margin-right: 30px; */
  width: 55%;

  /* @media (max-width: 479px) {
    margin-left: 20px;
    margin-right: 20px;
  } */

  @media (max-width: 767px) {
    /* margin-left: 20px; */
    /* display: inline-block; */
    padding-bottom: 36px;
    /* padding-right: 20px; */
    margin-top: 0;
    /* padding-left: 20px; */
    width: auto;
    /* margin-right: 20px; */
  }
`;

const IntroHeaderText = styled('h1')`
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 12px;
  margin-left: 0px;
  padding-right: 1px;
  font-family: Averta, sans-serif;
  font-size: 2.7vw;
  line-height: 140%;
  font-weight: 700;
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
    width: auto;
  }
  @media (max-width: 991px) {
    // color: #383a3f;
    /* width: 85%; */
    /* padding-right: 20px;
    padding-left: 20px; */

    font-size: 1.4rem;
    font-weight: 700;
    display: block;
    overflow-x: hidden;
    font-weight: 700;
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
  /** old height was 8px */
  width: 80px;
  height: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
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

// const IconContainer = styled('div')`
//   margin-top: 0px;
//   padding-top: 24px;
//   display: flex;
//   align-items: flex-end;

//   @media (max-width: 479px) {
//     margin: 0;
//     display: flex;
//     justify-content: center;
//     margin-left: auto;
//     margin-right: auto;
//   }

//   @media (max-width: 991px) {
//     display: flex;
//     justify-content: center;
//   }
// `;

const HeroContainer = styled('div')`
  display: flex;
  min-height: 78vh;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  font-size: 100px;

  @media (max-width: 1024px) {
    min-height: auto;
  }

  @media (min-width: 991px) {
    min-height: 0vh;
  }
  @media (min-width: 767px) {
    min-height: auto;
  }
  @media (min-width: 479px) {
    min-height: auto;
  }
`;

/**
 * box-sizing: border-box;
color: #60656c;
font-family: Roboto,sans-serif;
font-size: 1.2rem;
letter-spacing: .4px;
line-height: 1.5;
 */

function Intro() {
  return (
    <HeroContainer>
      <IntroContainer>
        <IntroHeader
          css={css`
            @media (max-width: 991px) {
              width: 100%;
            }
          `}
        >
          <IntroHeaderText
            css={css`
              font-size: 2.3rem;

              ${bpMaxSM} {
                font-size: 1.7rem;
                text-align: left;
              }
            `}
          >
            Hi, I'm Marlon.
            <br />
            I'm a software engineer @Fullcourt 🏀
          </IntroHeaderText>
          <IntroStyleBar
            css={css`
              visibility: hidden;
            `}
          />
          <IntroHeaderText
            css={css`
              font-size: 1.1rem;
              line-height: 1.5;
              color: #60656c;
              font-weight: 400;
              @media (max-width: 479px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                color: #60656c;
                margin-bottom: 0;
                text-align: left;
                margin-top: 10px;
                margin-right: auto;
                margin-left: auto;
              }
              @media (max-width: 991px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                color: #60656c;
                margin-bottom: 0;
                text-align: left;
                margin-top: 10px;
                margin-right: auto;
                margin-left: auto;
              }
            `}
          >
            Fullcourt is a pickup basketball app for finding players, courts, and organizing games. Our business is driven by an ad platform for marketing goods and services to our users.
          </IntroHeaderText>
          <IntroHeaderText
            css={css`
              font-size: 1.1rem;
              line-height: 1.5;
              font-weight: 400;
              color: #60656c;
              @media (max-width: 479px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                color: #60656c;
                margin-bottom: 0;
                text-align: left;
                /* margin: 0 auto; */
                margin-top: 20px;
                margin-right: auto;
                /* padding-right: 20px; */
                /* padding-left: 20px; */
                margin-left: auto;
              }
              @media (max-width: 991px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                color: #60656c;
                margin-bottom: 0;
                text-align: left;
                /* margin: 0 auto; */
                margin-top: 20px;
                margin-right: auto;
                /* padding-right: 20px; */
                /* padding-left: 20px; */
                margin-left: auto;
              }
            `}
          >
            <b>About me</b>: I believe in Growth, Humility, and being a Student at heart.
          </IntroHeaderText>
          <IntroHeaderText
            css={css`
              font-size: 1.1rem;
              line-height: 1.5;
              color: #60656c;
              font-weight: 400;
              @media (max-width: 479px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                margin-bottom: 0;
                text-align: left;
                color: #60656c;
                /* margin: 0 auto; */
                margin-top: 20px;
                margin-right: auto;
                /* padding-right: 20px; */
                /* padding-left: 20px; */
                margin-left: auto;
              }
              @media (max-width: 991px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                margin-bottom: 0;
                text-align: left;
                color: #60656c;
                /* margin: 0 auto; */
                margin-top: 20px;
                margin-right: auto;
                /* padding-right: 20px; */
                /* padding-left: 20px; */
                margin-left: auto;
              }
            `}
          >
            When I'm not coding, you can catch me stock trading, making
            electronic music, or eating pizza 🍕.
          </IntroHeaderText>
          <IntroHeaderText
            css={css`
              font-size: 1.1rem;
              line-height: 1.5;
              color: #60656c;
              font-weight: 400;
              @media (max-width: 479px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                margin-bottom: 0;
                text-align: left;
                /* margin: 0 auto; */
                margin-top: 20px;
                margin-right: auto;
                /* padding-right: 20px; */
                /* padding-left: 20px; */
                margin-left: auto;
              }
              @media (max-width: 991px) {
                font-size: 1.1rem;
                line-height: 1.5;
                font-weight: 400;
                margin-bottom: 0;
                text-align: left;
                /* margin: 0 auto; */
                margin-top: 20px;
                margin-right: auto;
                /* padding-right: 20px; */
                /* padding-left: 20px; */
                margin-left: auto;
              }
            `}
          >
            You can check out my&nbsp;
            <a
              href="/blog"
              rel="noopener noreferrer"
              css={css`
                color: #db99b9;
              `}
            >
              blog,
            </a>
            &nbsp;explore&nbsp;
            <a
              href="https://github.com/Mvrs"
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                color: #db99b9;
              `}
            >
              projects
            </a>
            &nbsp;I'm building, &nbsp;
            checkout&nbsp;
            <a
              href="https://www.50four.com/"
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                color: #db99b9;
              `}
            >
              Fullcourt
            </a>
            &nbsp;or contact me on&nbsp;
            <a
              href="https://twitter.com/saschamars"
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                background-image: linear-gradient(transparent 70%, #dbe4ff 0);
                box-sizing: border-box;
                color: #2b90d9;
                cursor: pointer;
                letter-spacing: 0.4px;
                text-decoration: none;

                :hover {
                  background-image: linear-gradient(transparent 70%, #bac8ff 0);
                  color: #555;
                }
              `}
            >
              Twitter.
            </a>
          </IntroHeaderText>
        </IntroHeader>
        <ImageContainer>
          <MarlonLaptop
            css={css`
              width: 50vw;
              height: 50vh;
              /* width: 120px; */
              /* margin-bottom: 20px; */
              max-width: calc(33% - 1rem);

              @media (max-width: 479px) {
              }
            `}
          />
        </ImageContainer>
      </IntroContainer>
    </HeroContainer>
  );
}

export default Intro;