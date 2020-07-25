import styled from '@emotion/styled';

export const Pre = styled.pre`
  text-align: left;
  /* margin: 1em 0; */
  margin-left: 0;
  margin-right: 0;
  padding: 0.5em;
  /* box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25); */

  @media (max-width: 767px) {
    overflow: auto;
  }

  & .token-line {
    line-height: 1.55em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: initial;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
