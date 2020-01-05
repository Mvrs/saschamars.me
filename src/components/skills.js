import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import ReactIcon from '../assets/icons8-react.svg';
import GraphQLIcon from '../assets/icons8-graphql.svg';
import NodeJsIcon from '../assets/icons8-nodejs.svg';

const SkillSetContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

    /* display: inline-block */

`;

const Skills = () => {
  return (
    <SkillSetContainer>
      <ReactIcon alt="react-logo"  />
      <GraphQLIcon alt="graphql-logo"  />
      <NodeJsIcon alt="nodehs-logo"  />
    </SkillSetContainer>
  );
};

export default Skills;
