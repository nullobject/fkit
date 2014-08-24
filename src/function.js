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

// compose(f, g)(a) == f(g(a))
function compose(f, g) {
  return function() {
    return f(g.apply(this, __slice.call(arguments)));
  };
}

// constant(a)(b) == a
function constant(a) {
  return function() {
    return a;
  };
}

// identity(a) == a
function identity(a) {
  return a;
}

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }
function and(a, b) { return a && b; }
function or(a, b)  { return a || b; }
function eql(a, b) { return a === b; }
function gt(a, b)  { return a > b; }
function gte(a, b) { return a >= b; }
function lt(a, b)  { return a < b; }
function lte(a, b) { return a <= b; }

module.exports = {
  // Utility functions.
  compose:  compose,
  constant: constant,
  curry:    curry,
  identity: identity,
  variadic: variadic,

  // Arithmetic functions.
  add: curry(add),
  sub: curry(sub),
  mul: curry(mul),
  div: curry(div),
  inc: function(a) { return add(a, 1); },
  dec: function(a) { return add(a, -1); },

  // Logical functions.
  not: function(a) { return !a; },
  and: curry(and),
  or:  curry(or),
  eql: curry(eql),
  gt:  curry(gt),
  gte: curry(gte),
  lt:  curry(lt),
  lte: curry(lte),
};
