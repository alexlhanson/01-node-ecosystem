'use strict';

module.exports = exports = {};

exports.hello = (name) => {
  if (typeof(name) !== 'string') return null;
  return `Hello ${name}`;
};