'use strict';

function CheckNum(value) {
  if (typeof(value) !== 'number') {
    throw new TypeError('Value must be a Number.');
  }

  this.num = value;
}

CheckNum.prototype.isInt = function equal() {
  if(this.num % 1 === 0) {
    return this;
  } else {
    throw new RangeError('Number must be an Integer : ' + this.num);
  }
};

CheckNum.prototype.isFloat = function equal() {
  if(this.num % 1 !== 0) {
    return this;
  } else {
    throw new RangeError('Number must be an Float : ' + this.num);
  }
};

CheckNum.prototype.equal = function equal(value) {
  if (typeof(value) !== 'number') {
    throw new TypeError('Value must be a Number.');
  }

  if (this.num === value) {
    return this;
  } else {
    throw new RangeError('Number is equal to : ' + value);
  }
};

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

//Set alias
CheckNum.prototype.int = CheckNum.prototype.isFloat;
CheckNum.prototype.float = CheckNum.prototype.isInt;
CheckNum.prototype.eq = CheckNum.prototype.equal;
CheckNum.prototype.lt = CheckNum.prototype.lesserThan;
CheckNum.prototype.gt = CheckNum.prototype.greaterThan;
CheckNum.prototype.pos = CheckNum.prototype.positive;
CheckNum.prototype.neg = CheckNum.prototype.negative;
CheckNum.prototype.btw = CheckNum.prototype.betweeen;
CheckNum.prototype.in = CheckNum.prototype.isIn;

module.exports = CheckNum;
