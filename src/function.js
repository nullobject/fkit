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

function variadic(fn) {
  var arity = fn.length;

  if (arity < 1) {
    return fn;
  } else if (arity === 1)  {
    return function() {
      return fn.call(this, __slice.call(arguments, 0));
    };
  } else {
    return function() {
      var numArgs      = arguments.length,
          namedArgs    = __slice.call(arguments, 0, arity - 1),
          missingArgs  = Math.max(arity - numArgs - 1, 0),
          padding      = new Array(missingArgs),
          variadicArgs = __slice.call(arguments, fn.length - 1);

      return fn.apply(this, namedArgs.concat(padding).concat([variadicArgs]));
    };
  }
}

module.exports = {
  curry:    curry,
  variadic: variadic
};
