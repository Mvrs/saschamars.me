import React from 'react';
import { css } from '@emotion/react';
import { bpMaxSM } from '../lib/breakpoints';

const Container = (props) => {
  const {
    maxWidth = 767,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props;
  const fullMaxWidth = Number.isNaN(Number(maxWidth))
    ? maxWidth
    : `${maxWidth + (noHorizontalPadding ? 0 : 80)}px`;
  return (
    <div
      css={css`
        width: 90%;
        margin: 0 auto;
        max-width: ${fullMaxWidth};
        padding: 0;

        /* ${bpMaxSM} {
          /* margin-bottom: 20vh; */
        /* padding: ${noVerticalPadding
          ? 0
          : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        } */
      `}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export default Container;
