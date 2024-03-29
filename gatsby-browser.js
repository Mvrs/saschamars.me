import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { components } from './src/components/mdx/index';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
