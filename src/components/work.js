import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StyleBar } from '../components/intro';

const WorkContainer = styled('div')`
  display: flex;
  min-height: 600px;
  padding-top: 120px;
  padding-bottom: 40px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  background-position: 50% 0px;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  font-weight: 600;
`;

const WorkNameSection = styled('section')`
  display: flex;
  padding-top: 40px;
  padding-bottom: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

const FullCourt = styled('div')`
  display: flex;
  width: 84%;
  height: 480px;
  min-width: 940px;
  margin-right: 0px;
  margin-bottom: 40px;
  margin-left: 0px;
  justify-content: center;
  align-items: flex-end;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(102, 140, 154, 0.2);
  border-radius: 8px;
  background-color: rgba(224, 245, 249, 0.3);
  text-decoration: none;

  :focus,
  :hover {
  }
`;

const Work = () => {
  return (
    <WorkContainer>
      <WorkNameSection>
        <h4
          css={css`
            margin-top: 0px;
            margin-bottom: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            color: #383a3f;
            text-align: center;
            font-size: 16px;
          `}
        >
          MY WORK
        </h4>
        <StyleBar />
      </WorkNameSection>
      <FullCourt>FullCourt goes right here!</FullCourt>
    </WorkContainer>
  );
};

export default Work;
