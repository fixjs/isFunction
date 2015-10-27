'use strict';

var expect = require('chai').expect,
  isFunction;

if (global._Uint8Array) {
  delete require.cache[require.resolve('../index')];
  global.Uint8Array = global._Uint8Array;
  delete global._Uint8Array;
  isFunction = require('../');
}

describe('isFunction', function() {
  it('is a function', function() {
    console.log(isFunction.toString());
    expect(isFunction).to.be.a('function');
  });
  describe('should be able to detect', function() {
    it('null', function() {
      expect(isFunction(null)).to.be.false;
    });
    it('undefined', function() {
      expect(isFunction()).to.be.false;
      expect(isFunction(undefined)).to.be.false;
    });
    it('other falsy values', function() {
      expect(isFunction(0)).to.be.false;
      expect(isFunction(-0)).to.be.false;
      expect(isFunction('')).to.be.false;
      expect(isFunction(false)).to.be.false;
    });
  });
  describe('should be able to detect functions', function() {
    it(':finds itself as a function', function() {
      expect(isFunction(isFunction)).to.be.true;
    });
    it(':anonymous functions', function() {
      expect(isFunction(function() {})).to.be.true;
    });
    it(':basic global functions', function() {
      expect(isFunction(Function)).to.be.true;
      expect(isFunction(Object)).to.be.true;
      expect(isFunction(Array)).to.be.true;
    });
  });
});