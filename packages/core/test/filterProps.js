/* eslint-env jest */
import { filterProps } from '../src';

const pre = 'dir';

describe('Core', () => {
  test('filterProps', () => {
    expect(typeof filterProps).toBe('function');

    const props = {
      dirMarginRight: 10,
      dirMarginLeft: 20,
      dirLeft: 30,
      dirRight: 40,
    };

    expect(filterProps(props, pre)).toEqual({
      'margin-right': 10, 'margin-left': 20, left: 30, right: 40,
    });
  });
});
