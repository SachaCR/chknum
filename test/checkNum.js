'use strict';

var expect = require('chai').expect;
var checkNum = require('../index');

describe('checkNum()', function() {
   it('should not throw an error if params is a int', function() {
    expect(function() {
			checkNum(5);
		}).to.not.throw(TypeError);
  });

  it('should not throw an error if params is a float', function() {
    expect(function() {
			checkNum(5.05);
		}).to.not.throw(TypeError);
  });
  
  it('should throw an error if params is not a Number', function() {
    expect(function() {
			checkNum('a');
		}).to.throw(TypeError);
  });
    
  it('should throw an error if params is not a Number', function() {
    expect(function() {
			checkNum('5');
		}).to.throw(TypeError);
  });
  
  it('chaining function with aliases should works', function() {
    expect(function() {
			checkNum(5).pos().gt(4).lt(6);
		}).to.not.throw(Error);
  });
  
  it('chaining function should throw error if params is not valid', function() {
    expect(function() {
			checkNum(5).pos().gt(6).lt(7);
		}).to.throw(RangeError);
  });
  
  it('chaining function should throw error if params is not valid', function() {
    expect(function() {
			checkNum(5).pos().gt('4').lt(6);
		}).to.throw(TypeError);
  });
});
