(function(global) {
  'use strict';
  var isFunction = function(value) {
    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
    return typeof value === 'function' || false;
  };
  // Fallback for environments that return incorrect `typeof` operator results.
  if (isFunction(/x/) || (Uint8Array && !isFunction(Uint8Array))) {
    isFunction = function(value) {
      return Object.prototype.toString.call(value) === '[object Function]';
    };
  }
  if (typeof exports === 'object') {
    module.exports = isFunction;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isFunction;
    });
  } else {
    global.isFunction = isFunction;
  }
}(function g() {
  return this;
}));