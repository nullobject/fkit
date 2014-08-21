'use strict';

var __slice = Array.prototype.slice;

function curry(f) {
  var arity = f.length;

  return given([]);

  function given(argsSoFar) {
    return function() {
      var updatedArgsSoFar = argsSoFar.concat(__slice.call(arguments, 0));

      if (updatedArgsSoFar.length >= arity) {
        return f.apply(this, updatedArgsSoFar);
      } else {
        return given(updatedArgsSoFar);
      }
    };
  }
}

function variadic(f) {
  var arity = f.length;

  if (arity < 1) {
    return f;
  } else if (arity === 1)  {
    return function() {
      return f.call(this, __slice.call(arguments, 0));
    };
  } else {
    return function() {
      var numArgs      = arguments.length,
          namedArgs    = __slice.call(arguments, 0, arity - 1),
          missingArgs  = Math.max(arity - numArgs - 1, 0),
          padding      = new Array(missingArgs),
          variadicArgs = __slice.call(arguments, f.length - 1);

      return f.apply(this, namedArgs.concat(padding).concat([variadicArgs]));
    };
  }
}

// compose(f, g)(x) == f(g(x))
function compose(f, g) {
  return function() {
    return f(g.apply(this, __slice.call(arguments)));
  };
}

module.exports = {
  compose:  compose,
  curry:    curry,
  variadic: variadic
};
