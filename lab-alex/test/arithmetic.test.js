'use strict';

const arithmetic = require('../lib/arithmetic.js');

// test('should return addition and subtraction of two numbers', () => {
//   let actual = arithmetic.add(1, 2),
//     expectedValue = 3;
//   expect(actual).toBe(expectedValue);

//   actual = arithmetic.sub(1, 2); 
//   expectedValue = 1;
//   expect(actual).toBe(expectedValue);

// })

test('should return null if parameters are not a number', () => {
  expect(arithmetic.add(NaN, 4)).toBeNull();
  expect(arithmetic.add(4, NaN)).toBeNull();
  expect(arithmetic.sub(NaN, 4)).toBeNull();
  expect(arithmetic.sub(4, NaN)).toBeNull();
})

