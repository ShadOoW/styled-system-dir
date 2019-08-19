import rtlCSSJS from 'rtl-css-js';
import { filterProps } from '@styled-system-dir/core';

const defaultOpts = { pre: 'dir' };

export const direction = (props) => {
  const filtered = filterProps(props, defaultOpts.dir);

  return {
    '[dir="ltr"] &': {
      ...filtered,
    },
    '[dir="rtl"] &': {
      ...rtlCSSJS(filtered),
    },
  };
};
