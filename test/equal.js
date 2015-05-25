'use strict';

var expect = require('chai').expect;
var checkNum = require('../index');

describe('checkNum()', function() {
  it('should not throw an error if num is equal to value', function() {
    expect(function() {
      checkNum(5).equal(5);
    }).to.not.throw(RangeError);
  });

  it('should throw an error if num is not  equal to value', function() {
    expect(function() {
      checkNum(5.05).eq(5);
    }).to.throw(RangeError);
  });

  it('should throw an error if num is not a number', function() {
    expect(function() {
      checkNum(5.05).eq('5');
    }).to.throw(TypeError);
  });
});
