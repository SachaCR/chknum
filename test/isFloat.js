'use strict';

var expect = require('chai').expect;
var checkNum = require('../index');

describe('isFloat()', function() {
  it('should not throw an error if params is a float', function() {
    expect(function() {
      checkNum(5.00001).isFloat();
    }).to.not.throw(RangeError);
  });

  it('should throw an error if params is a integer', function() {
    expect(function() {
      checkNum(5.000000).isFloat();
    }).to.throw(RangeError);
  });

  it('should throw an error if params is a integer', function() {
    expect(function() {
      checkNum(5).isFloat();
    }).to.throw(RangeError);
  });
});
