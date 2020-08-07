import React from 'react';
import { preToCodeBlock } from 'mdx-utils';
import { Code } from './code';

export const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    }

    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children}</>,
};
