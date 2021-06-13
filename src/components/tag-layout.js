import styled from '@emotion/styled';

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
  margin-top: 5px;
  order: 1;
  flex: 0 55%;

  @media (max-width: 479px) {
    margin-top: 2px;
    /* justify-content: baseline;
    align-content: flex-start; */
  }
`;

export const InnerTagContainer = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  outline: 0;
  padding-bottom: 0.3125rem;
  padding-top: 0;
  gap: 4px;
  /* @media (max-width: 479px) {
    padding-bottom: 0;
    padding-top: 8px;
  } */
`;

export const TagContainer = styled('div')`
  align-items: center;
  /* border-radius: 3px; */
  box-sizing: border-box;
  background: ${(props) => props.hexCode};
  opacity: ${(props) => props.opacity};
  /* color: #37352f; */
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  height: 18px;
  /* line-height: 120%;
  margin: 0 6px 6px 0;
  min-width: 0;
  outline: 0;
  padding-left: 6px;
  padding-right: 6px; */
`;

export const TagName = styled('div')`
  box-sizing: border-box;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
