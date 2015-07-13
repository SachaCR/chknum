'use strict';

var expect = require('chai').expect;
var checkNum = require('../index');

describe('isInt()', function() {
  it('should not throw an error if params is a integer', function() {
    expect(function() {
      checkNum(5).isInt().isIn([1, 2, 3, 4, 5]);
    }).to.not.throw(RangeError);
  });

  it('should not throw an error if params is an integer x.0000', function() {
    expect(function() {
      checkNum(5.0000).isInt();
    }).to.not.throw(Error);
  });

  it('should throw an error if params is a float', function() {
    expect(function() {
      checkNum(5.0000001).isInt();
    }).to.throw(RangeError);
  });
});
