'use strict';

var CheckNum = require('./lib/CheckNum');

function checkNum(value) {
  if (typeof(value) !== 'number') {
    throw new TypeError('Value must be a Number.');
  }
  return new CheckNum(value);
}

module.exports = checkNum;

