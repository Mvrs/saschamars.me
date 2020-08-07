import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { components } from './src/components/mdx/index';

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
