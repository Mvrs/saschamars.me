import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { preToCodeBlock } from 'mdx-utils';
import theme from 'prism-react-renderer/themes/nightOwl';
import {
  Pre,
  Line,
  LineNo,
  LineContent,
} from './src/gatsby-plugin-theme/styles';

const components = {
  wrapper: ({ children }) => <>{children}</>,
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={matches && matches.groups.lang ? matches.groups.lang : ''}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    );
  },
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
