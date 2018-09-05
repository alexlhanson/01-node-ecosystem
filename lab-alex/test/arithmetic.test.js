'use strict';

const arithmetic = require('../lib/arithmetic.js');

test('should return null if parameters are not a number', () => {
  expect(arithmetic.add(NaN, 4)).toBeNull();
  expect(arithmetic.add(4, NaN)).toBeNull();
  expect(arithmetic.sub(NaN, 4)).toBeNull();
  expect(arithmetic.sub(4, NaN)).toBeNull();
})