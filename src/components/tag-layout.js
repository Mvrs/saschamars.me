import styled from '@emotion/styled';
// import { css } from '@';

export const MainTagContainer = styled('div')`
  box-sizing: border-box;
  cursor: default;
  display: block;
  font-size: 14px;
  min-height: 32px;
  outline: 0;
  justify-content: left;
  overflow: hidden;
  padding: 0 8px 0 0;
  white-space: normal;
  width: 200px;
`;

export const InnerTagContainer = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  outline: 0;
  /* margin-left: 4px; */
  padding-bottom: 1px;
  padding-top: 7px;
`;

export const TagContainer = styled('div')`
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  background: ${props => props.hexCode};
  opacity: ${props => props.opacity};
  color: #37352f;
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  height: 18px;
  line-height: 120%;
  margin: 0 6px 6px 0;
  min-width: 0;
  outline: 0;
  padding-left: 6px;
  padding-right: 6px;
`;

export const TagName = styled('div')`
  box-sizing: border-box;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
