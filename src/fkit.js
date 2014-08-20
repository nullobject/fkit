'use strict';

var __slice = Array.prototype.slice;

function curry(fn) {
  var arity = fn.length;

  return given([]);

  function given(argsSoFar) {
    return function() {
      var updatedArgsSoFar = argsSoFar.concat(__slice.call(arguments, 0));

      if (updatedArgsSoFar.length >= arity) {
        return fn.apply(this, updatedArgsSoFar);
      } else {
        return given(updatedArgsSoFar);
      }
    };
  }
}

module.exports = {
  curry: curry,

  object: require('./object')
};
