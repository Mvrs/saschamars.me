import React from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/react';

const ImageBackground = styled('div')`
  width: 45%;
  max-width: 45%;
  background-color: #ddd;
  vertical-align: middle;
  display: inline-block;
  z-index: 1;
  /* position: inherit; */
`;

function ImageHeader() {
  return <ImageBackground />;
}

export default ImageHeader;
