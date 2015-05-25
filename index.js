'use strict';

var CheckNum = require('./lib/CheckNum');

function checkNum(value) {
  return new CheckNum(value);
}

module.exports = checkNum;
