import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import ReactIcon from '../assets/icons8-react.svg';
import GraphQLIcon from '../assets/icons8-graphql.svg';
import NodeJsIcon from '../assets/icons8-nodejs.svg';
import JSIcon from '../assets/icons8-javascript.svg';
import { StyleBar } from './intro';

const fadeCard = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const SkillContainer = styled('div')`
  min-height: 300px;
  border-style: none;
`;

const SkillSetContainer = styled('div')`
  display: flex;
  padding-bottom: 120px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  vertical-align: middle;
`;

const SkillSetCard = styled('div')`
  opacity: 0;
  animation: ${fadeCard} ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;

  display: block;
  margin: auto;
`;

const SkillName = styled('div')`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  color: #383a3f;
`;

const SectionNameContainer = styled('div')`
  display: flex;
  padding-top: 40px;
  padding-bottom: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

const Skills = () => {
  return (
    <SkillContainer>
      <SectionNameContainer>
        <h4
          css={css`
            /* display: flex;
      margin: auto; */
            /* margin: 1.25rem 0 0 1rem; */
            margin-top: 0px;
            margin-bottom: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            color: #383a3f;
            text-align: center;
            font-size: 16px;
          `}
        >
          MY SKILLS
        </h4>
        <StyleBar />
      </SectionNameContainer>
      <SkillSetContainer>
        <SkillSetCard
          css={css`
            animation-delay: 0.4s;
          `}
        >
          <ReactIcon alt="react-logo" />
          <SkillName>Client</SkillName>
        </SkillSetCard>
        <SkillSetCard
          css={css`
            animation-delay: 0.8s;
          `}
        >
          <NodeJsIcon alt="nodejs-logo" />
          <SkillName>Server</SkillName>
        </SkillSetCard>
        <SkillSetCard
          css={css`
            animation-delay: 1.2s;
          `}
        >
          <JSIcon alt="javascript-logo" />
          <SkillName>Programming</SkillName>
        </SkillSetCard>
        <SkillSetCard
          css={css`
            animation-delay: 1.6s;
          `}
        >
          <GraphQLIcon alt="graphql-logo" />
          <SkillName>Schema</SkillName>
        </SkillSetCard>
      </SkillSetContainer>
    </SkillContainer>
  );
};

export default Skills;
