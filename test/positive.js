'use strict';

var expect = require('chai').expect;
var checkNum = require('../index');

describe('positive()', function() {
  it('should found 5 as a positive number', function() {
    expect(function() {
      checkNum(5).positive();
    }).to.not.throw(RangeError);
  });

  it('should found 0.00000000000001 as a positive number', function() {
    expect(function() {
      checkNum(0.00000000000001).positive();
    }).to.not.throw(RangeError);
  });

  it('should throw RangeError if value is a negative number', function() {
    expect(function() {
      checkNum(-5).positive();
    }).to.throw(RangeError);
  });

  it('should throw a RangeError if value is 0', function() {
    expect(function() {
      checkNum(0).positive();
    }).to.throw(RangeError);
  });
});

describe('negative()', function() {
  it('should found -5 as a negative number', function() {
    expect(function() {
      checkNum(-5).negative();
    }).to.not.throw(RangeError);
  });

  it('should found -0.00000000000001 as a negative number', function() {
    expect(function() {
      checkNum(-0.00000000000001).negative();
    }).to.not.throw(RangeError);
  });

  it('should throw RangeError if value is a positive number', function() {
    expect(function() {
       checkNum(5).negative();
    }).to.throw(RangeError);
  });

  it('should throw a RangeError if value is 0', function() {
    expect(function() {
      checkNum(0).negative();
    }).to.throw(RangeError);
  });
});
