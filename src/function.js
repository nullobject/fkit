/** @author Josh Bassett */

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

/**
 * @module fn
 */
module.exports = {
  /**
   * The identity function.
   *
   * @returns {function} The identity function.
   * @example identity(a) == a
   */
  identity: function(a) {
    return a;
  },

  /**
   * Creates a new function that applies the function `f` to the result of the
   * function `g`.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {function} f
   * @param {function} g
   * @returns {function} A new function.
   * @example compose(f, g)(x) == f(g(x))
   */
  compose: curry(function(f, g) {
    return function() {
      return f(g.apply(this, __slice.call(arguments)));
    };
  }),

  /**
   * Creates a function that always returns the value `c`, regardless of any
   * given arguments.
   *
   * @param {*} c The constant value.
   * @returns {function} A new function.
   * @example constant(c)(1, 2, 3, ...) == c
   */
  constant: function(c) {
    return function() {
      return c;
    };
  },

  /**
   * Creates a new function that allows partial application of the arguments to
   * the function `f`.
   *
   * @static
   * @function
   * @param {function} f The function to be curried.
   * @returns {function} A new function.
   * @example
   *   function add(a, b) { return a + b; }
   *   curry(add)(1)(2) == 3
   */
  curry: curry,

  /**
   * Creates a new function that wraps the function `f` to accept only one
   * argument.
   *
   * @static
   * @function
   * @param {function} f The function to be wrapped.
   * @returns {function} A new function.
   */
  unary: function(f) {
    if (f.length === 1) {
      return f;
    } else {
      return function(a) {
        return f.call(this, a);
      };
    }
  },

  /**
   * Creates a new function that wraps the function `f` to accept any number of
   * agruments. The last named parameter will be given an array of arguments.
   *
   * @static
   * @function
   * @param {function} f The function to be wrapped.
   * @returns {function} A new function.
   * @example
   *   function foo(head, tail) { ... }
   *   variadic(foo)(1, 2, 3) == foo(1, [2, 3])
   */
  variadic: variadic,

  /**
   * Curried version of `+`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  add: curry(function(a, b) { return a + b; }),

  /**
   * Curried version of `-`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  sub: curry(function(a, b) { return a - b; }),

  /**
   * Curried version of `*`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mul: curry(function(a, b) { return a * b; }),

  /**
   * Curried version of `/`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  div: curry(function(a, b) { return a / b; }),

  /**
   * Curried version of `&&`.
   *
   * @static
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  and: curry(function(a, b) { return a && b; }),

  /**
   * Curried version of `||`.
   *
   * @static
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  or: curry(function(a, b) { return a || b; }),

  /**
   * Curried version of `===`.
   *
   * @static
   * @function
   * @param {*} a
   * @param {*} b
   * @returns {boolean} The result.
   */
  eql: curry(function(a, b) { return a === b; }),

  /**
   * Curried version of `>`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gt: curry(function(a, b) { return a > b; }),

  /**
   * Curried version of `>=`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gte: curry(function(a, b) { return a >= b; }),

  /**
   * Curried version of `<`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lt: curry(function(a, b) { return a < b; }),

  /**
   * Curried version of `<=`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lte: curry(function(a, b) { return a <= b; }),

  /**
   * Increments the number.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  inc: function(a) { return a + 1; },

  /**
   * Decrements the number.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  dec: function(a) { return a - 1; }
};
