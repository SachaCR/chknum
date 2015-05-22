'use strict';

function CheckNum(num) {
  this.num = num;
}

CheckNum.prototype.greaterThan = function greaterThan(value) {
  if (typeof(value) !== 'number') {
    throw new TypeError('Value must be a Number.');
  }

  if (this.num > value) {
    return this;
  } else {
    throw new RangeError('Number is not greater than : ' + value);
  }
};

CheckNum.prototype.lesserThan = function lesserThan(value) {
  if (typeof(value) !== 'number') {
    throw new TypeError('Value must be a Number.');
  }

  if (this.num < value) {
    return this;
  } else {
    throw new RangeError('Number is not lesser than : ' + value);
  }
};

CheckNum.prototype.positive = function positive() {
  return this.greaterThan(0);
};

CheckNum.prototype.negative = function negative() {
  return this.lesserThan(0);
};

CheckNum.prototype.between = function between(min, max) {
  if (min > max) {
    var tmpMax = max;
    max = min;
    min = tmpMax;
  }

  this.lesserThan(max);
  this.greaterThan(min);
  return this;
};

CheckNum.prototype.isIn = function isIn(values) {
  if (values.indexOf(this.num) === -1) {
    throw new RangeError('Number is not in : ' + values);
  }

  return this;
};

CheckNum.prototype.lt = CheckNum.prototype.lesserThan;
CheckNum.prototype.gt = CheckNum.prototype.greaterThan;
CheckNum.prototype.pos = CheckNum.prototype.positive;
CheckNum.prototype.neg = CheckNum.prototype.negative;
CheckNum.prototype.btw = CheckNum.prototype.betweeen;

module.exports = CheckNum;
