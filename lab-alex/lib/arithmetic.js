'use strict';

module.exports = exports = {};

exports.add = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return null;
  } else {
    return num1 + num2;
  } 
};

exports.sub = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return null;
  } else {
    return num2 - num1;
  } 
};
