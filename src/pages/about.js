import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import GithubIcon from '../assets/icons8-github.svg';
import LinkedInIcon from '../assets/icons8-linkedin-circled.svg';
import TwitterIcon from '../assets/icons8-twitter-circled.svg';
import useSiteMetadata from '../hooks/use-sitemetadata';

export const ImageHolder = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: auto;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  margin-bottom: 0px;
  padding: 0px 15%;
  flex-direction: column;
  color: #181818;
  @media (max-width: 479px) {
    padding-right: 15px;
    padding-left: 15px;
    max-width: none;
  }

  @media (max-width: 767px) {
    padding-right: 14px;
    padding-left: 15px;
  }
`;

export const AboutHeading = styled.div`
  box-sizing: border-box;
  color: #2b90d9;
  font-size: 36px;
  font-weight: 600;
  line-height: 52px;
  margin-top: 0;
  margin-bottom: 20px;
  max-width: 750px;
  opacity: 1;
  text-align: left;
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
    rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;

  @media (max-width: 479px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const AboutText = styled.div`
  margin-bottom: 0px;
  font-family: Averta, sans-serif;
  color: #686868;
  font-size: 18px;
  line-height: 36px;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const AboutFooter = styled.div`
  margin-top: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  background-color: #383a3f;
  border-top: 5px solid;
  border-color: #db99b9;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media (max-width: 767px) {
    margin-top: 0px;
  }

  @media (max-width: 991px) {
    margin-top: 20px;
    padding-top: 50px;
  }
`;

const About = () => {
  const { keywords, url } = useSiteMetadata();
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "van-shoe.jpg" }) {
        publicURL
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const _image = getImage(image.sharp.fluid);

  return (
    <>
      <Layout>
        <Helmet>
          <html lang="en" />
          <title>About Marlon V. Johnson</title>
          <meta name="description" content="All about Marlon V. Johson" />
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content="About Marlon V. Johnson" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="All about Marlon V. Johson"
          />
          <meta property="og:image" content={image.publicURL} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" href={url} />
          <link rel="canonical" href={url} />
        </Helmet>
        <ImageHolder>
          <GatsbyImage
            alt="marlon johnson"
            // fluid={image.sharp.fluid}
            image={_image}
            fadeIn={false}
            loading="eager"
            imgStyle={{ marginTop: 0 }}
            css={css`
              align-self: center;
              border-width: 0;
              box-sizing: border-box;
              display: inline-block;
              filter: grayscale(25%);
              max-width: 15%;
              border-radius: 50%;
              min-width: 200px;
              opacity: 1;
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
                rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
              vertical-align: middle;
            `}
          />
        </ImageHolder>

        <TextContainer>
          <AboutHeading>
            Hi, I'm Marlon I'm a Frontend Engineer who loves to build high
            quality software that's inspiring, innovative, and intuitive.
          </AboutHeading>
          <AboutText>
            The idea of becoming a developer was something that never crossed my
            mind, I’ve always had a fascination towards becoming one with the
            matrix <b>I know totally unrelated</b>
            . But, this curiosity was built on top of fictional depictions the
            media portrayed or the movies I like to watch, so finding a way into
            the world of computer science was trivial. Honestly, who wouldn’t
            want to be in a dark room with a neon green terminal door dashing
            your favorite meal you never gave up on.
            <br />
            <br />
            All jokes aside, I decided to embark on the journey in my freshman
            year of college taking Intro to Computer Programming, and it was
            boring <b>I’m not gonna lie</b>. Maybe because it was in C. But,
            that class gave me a foundation to unlock why the world is in an
            object in itself.{' '}
            <b>I know… I know, I’m not speaking about the Matrix lol</b>
            . Knowing there was a way to improve lives and solve problems with
            creativity is what drew me to becoming a Frontend Engineer. Also, it
            is cool to flex your design skills every once in a while.
            <br />
            <br />
            Since taking a leave of absence from school my Senior year {''}
            <b>times do get rough</b>, I’ve been doing Frontend work with a
            startup{' '}
            <a
              aria-label="my first internship"
              href="https://apps.apple.com/us/app/fullcourt-pickup-basketball/id1083156787"
              css={css`
                color: #db99b9;
              `}
            >
              Fullcourt
            </a>{' '}
            based in San Deigo it’s a social platform to connect other people
            who’re main interest is pickup basketball. Other than that, I’m
            finding myself dive deeper into React, DDD, TypeScript, and the
            concept of GraphQL. When I’m not on my laptop, I’m running, hooping,
            or making tunes in my bedroom.
            <div
              css={css`
                margin-top: 80px;
                margin-bottom: 20px;
                color: #2b90d9;
                font-size: 16px;
                font-weight: 600;
                @media (max-width: 767px) {
                  margin-top: 40px;
                  margin-bottom: 10px;
                  font-size: 14px;
                }
              `}
            >
              SKILLS & TOOLS
            </div>
          </AboutText>

          <AboutText>
            React, GraphQL, TypeScript, Gatsby, Node JS, Postgres, Wireframing,
            Prototyping, Responsive Web Design, Framer, Figma, Adobe XD
          </AboutText>
        </TextContainer>
      </Layout>
      <div
        css={css`
          height: 100px;
          margin-top: 0px;

          @media (max-width: 767px) {
            height: 80px;
            margin-top: 0px;
          }
        `}
      >
        {}
      </div>
      <AboutFooter>
        <div
          css={css`
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            margin-top: 0px;
            padding-top: 80px;
            flex-direction: column;
            justify-content: space-between;

            align-items: center;

            @media (max-width: 479px) {
              max-width: none;
            }

            @media (max-width: 767px) {
              padding-top: 20px;
              max-width: none;
            }
          `}
        >
          <h2
            css={css`
              display: flex;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              padding-left: 0px;
              flex-direction: column;

              justify-content: space-between;
              color: #fff;
              font-size: 24px;
              font-weight: 600;
              text-align: center;

              @media (max-width: 479px) {
                font-size: 16px;
              }
            `}
          >
            Let's get in touch!
          </h2>

          <div
            css={css`
              position: static;
              right: 0px;
              display: flex;
              width: 700px;
              margin-left: 0px;
              justify-content: flex-start;

              align-items: center;

              @media (max-width: 767px) {
                width: auto;
                padding-left: 0px;
                justify-content: center;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                width: 248px;
                height: 50px;
                margin-top: 28px;
                margin-bottom: 0px;
                padding-bottom: 23px;
                justify-content: center;
                align-items: center;
                text-decoration: none;

                margin-left: auto;
                margin-right: auto;
              `}
            >
              <a
                aria-label="my email address"
                href="mailto: johnsonmarlon18@gmail.com"
                css={css`
                  font-style: italic;
                  font-weight: 400;
                  color: #fff;
                  font-size: 16px;
                  text-decoration: none;
                  :hover,
                  :focus {
                    opacity: 0.2;
                  }
                `}
              >
                johnsonmarlon18@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            margin-bottom: 0px;
            padding-bottom: 100px;
            justify-content: center;
            align-items: center;
          `}
        >
          <a
            aria-label="my github profile"
            href="https://github.com/Mvrs"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              margin-top: 1rem;
            `}
          >
            <GithubIcon
              css={css`
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
          <a
            aria-label="my linkedin profile"
            href="https://www.linkedin.com/in/marvj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              css={css`
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

          <a
            aria-label="my twitter profile"
            href="https://twitter.com/saschamars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              css={css`
                color: #fff;
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
                  outline: 0;
                }
              `}
            />
          </a>
        </div>
      </AboutFooter>
    </>
  );
};

export default About;
