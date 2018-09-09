'use strict';

module.exports = exports = {};

exports.add = (num1, num2) => {
  if (_isValidNum(num1, num2) === false) return null;
  return num1 + num2;
};

exports.sub = (num1, num2) => {
  if (_isValidNum(num1, num2) === false) {
    return null;
  } else {
    return num1 - num2;
  } 
};

let _isValidNum = (first, second) => {
  if (typeof first !== 'number' || typeof second !== 'number') {
    return false;
  } else {
  return true;
  }
}