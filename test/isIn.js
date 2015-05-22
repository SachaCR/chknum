'use strict';

var expect = require('chai').expect;
var checkNum = require('../index');

describe('checkNum()', function() {
   it('should not throw an error if params is in array', function() {
    expect(function() {
			checkNum(5).isIn([1,2,3,4,5]);
		}).to.not.throw(RangeError);
  });
  
  it('should throw an error if params is not in array', function() {
    expect(function() {
			checkNum(5).isIn([1,2,3,4]);
		}).to.throw(RangeError);
  });
    
  it('should ignore string params and throw an error', function() {
    expect(function() {
			checkNum(5).isIn(['1','2','3','4','5']);
		}).to.throw(RangeError);
  });
  
  it('chaining function with aliases should works', function() {
    expect(function() {
			checkNum(5).pos().gt(4).lt(6);
		}).to.not.throw(RangeError);
  });
});
