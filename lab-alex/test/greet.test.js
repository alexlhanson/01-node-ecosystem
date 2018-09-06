'use strict';

const greet = require('../lib/greet.js');

test('should return a message Hello World', () => {
  let actual = greet.hello('World'),
    expectedValue = 'Hello World';
  expect(actual).toBe(expectedValue);
})

test('should return null if wrong parameter type is passed in', () =>{
  expect(greet.hello(1)).toBeNull();
  expect(greet.hello(true)).toBeNull();
  expect(greet.hello()).toBeNull();
  expect(greet.hello([])).toBeNull();
  expect(greet.hello({})).toBeNull();
})
