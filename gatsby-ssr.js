import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { components } from './src/components/mdx/index';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
