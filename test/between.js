'use strict';

var expect = require('chai').expect;
var checkNum = require('../index');

describe('between()', function() {
  it('should found 5 between 0 and 10', function() {
    expect(function() {
      checkNum(5).between(0, 10);
    }).to.not.throw(RangeError);
  });

  it('should found 5.05 between 5.01 and 5.06', function() {
    expect(function() {
      checkNum(5.05).between(5.01, 5.06);
    }).to.not.throw(RangeError);
  });

  it('should found 5.05 is not between 5.01 and 5.05', function() {
    expect(function() {
      checkNum(5.05).between(5.01, 5.05);
    }).to.throw(RangeError);
  });

  it('should detect mistake and reverse between() params', function() {
    expect(function() {
      checkNum(5).between(10, 0);
    }).to.not.throw(RangeError);
  });

  it('should found 12 is not between 0 and 10', function() {
    expect(function() {
      checkNum(12).between(0, 10);
    }).to.throw(RangeError);
  });

  it('should throw a TypeError if min params is not a number', function() {
    expect(function() {
      checkNum(12).between('a', 10);
    }).to.throw(Error);
  });

  it('should throw a TypeError if max params is not a number', function() {
    expect(function() {
      checkNum(12).between(0, 'b');
    }).to.throw(TypeError);
  });

  it('should throw a RangeError if value is equal to min or max', function() {
    expect(function() {
      checkNum(10).between(0, 10);
    }).to.throw(RangeError);
  });

  it('should throw a RangeError if min === max', function() {
    expect(function() {
      checkNum(10).between(10, 10);
    }).to.throw(RangeError);
  });
});
