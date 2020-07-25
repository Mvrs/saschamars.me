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
    const matches = className.match(/language=(?<lang>.*)/);
    const codeProps = preToCodeBlock(props);

    if (!codeProps) {
      return <pre {...props} />;
    }

    {
      /* code={props.children.props.children.trim()} */
    }
    {
      /* matches && matches.groups && matches.group.lang
            ? matches.groups.lang
            : '' */
    }
    const { codeString, language } = codeProps;
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
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
