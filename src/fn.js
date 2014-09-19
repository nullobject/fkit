'use strict';

var util = require('./util');

function flatten(as) {
  return as.reduce(function(a, b) { return a.concat(b); }, []);
}

function curry(f) {
  var arity = f.length;

  if (arity <= 1) {
    return f;
  } else {
    return given([], 0);
  }

  function given(args, applications) {
    return function() {
      var newArgs = args.concat(
        (arguments.length > 0) ? util.slice.call(arguments, 0) : undefined
      );

      if (newArgs.length >= arity) {
        return f.apply(this, newArgs);
      } else {
        return given(newArgs, applications + 1);
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
      return f.call(this, flatten(util.slice.call(arguments, 0)));
    };
  } else {
    return function() {
      var numMissingArgs = Math.max(arity - arguments.length - 1, 0),
          missingArgs    = new Array(numMissingArgs),
          namedArgs      = util.slice.call(arguments, 0, arity - 1),
          variadicArgs   = util.slice.call(arguments, f.length - 1);

      return f.apply(this, namedArgs.concat(missingArgs).concat([variadicArgs]));
    };
  }
}

var self;

/**
 * This module defines the basic functions.
 *
 * @module fn
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Applies the function `f` to the value `a`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f A function to be applied.
   * @param {*} a A value.
   * @returns {*} The result.
   * @example apply(f, a) == f(a)
   */
  apply: curry(function(f, a) { return f(a); }),

  /**
   * Applies the function `f` to the values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f A function to be applied.
   * @param {*} a A value.
   * @param {*} b A value.
   * @returns {*} The result.
   * @example apply(f, a) == f(a)
   */
  apply2: curry(function(f, a, b) { return f(a, b); }),

  /**
   * Applies the function `f` to the values `a`, `b`, and `c`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f A function to be applied.
   * @param {*} a A value.
   * @param {*} b A value.
   * @param {*} c A value.
   * @returns {*} The result.
   * @example apply(f, a) == f(a)
   */
  apply3: curry(function(f, a, b, c) { return f(a, b, c); }),

  /**
   * Applies the function `f` to the value `a`.
   *
   * @static
   * @curried
   * @function
   * @param {*} a A value.
   * @param {function} f A function to be applied.
   * @returns {*} The result.
   * @example applyRight(a, f) == f(a)
   */
  applyRight: curry(function(a, f) { return f(a); }),

  /**
   * Composes the list of functions `fs`.
   *
   * @static
   * @function
   * @param {...function} fs A list of functions to be composed.
   * @returns {function} A new function.
   * @example compose(f, g, h)(a) == f(g(h(a)))
   */
  compose: variadic(function(fs) {
    return function(a) {
      return fs.reduceRight(function(a, f) {
        return f(a);
      }, a);
    };
  }),

  /**
   * Wraps the binary function `f` and flips the order of the arguments.
   *
   * @param {function} f A function to be flipped.
   * @returns {function} A new function.
   */
  flip: function(f) { return function(a, b) { return f(b, a); }; },

  /**
   * Returns the identity function (a function that returns its first
   * argument).
   *
   * @param {*} a A value.
   * @returns {*} The value `a`.
   * @example id(a) == a
   */
  id: function(a) { return a; },

  /**
   * Returns the constant function (a function that always returns the value
   * `c`, regardless of the given arguments).
   *
   * @param {*} c A value.
   * @returns {function} A new function.
   * @example const(c)(1, 2, 3, ...) == c
   */
  const: function(c) { return function() { return c; }; },

  /**
   * Creates a new function that allows partial application of the arguments
   * to the function `f`.
   *
   * @static
   * @function
   * @param {function} f A function to be curried.
   * @returns {function} A new function.
   * @example
   *   var add = curry(function(a, b) { return a + b; });
   *   add(1)(2) == 3
   */
  curry: curry,

  /**
   * Creates a new function that wraps the function `f` to accept only one
   * argument.
   *
   * @param {function} f A function to be wrapped.
   * @returns {function} A new function.
   */
  unary: function(f) { return (f.length === 1) ? f : self.apply(f); },

  /**
   * Creates a new function that wraps the function `f` to accept only two
   * arguments.
   *
   * @param {function} f A function to be wrapped.
   * @returns {function} A new function.
   */
  binary: function(f) { return (f.length === 2) ? f : self.apply2(f); },

  /**
   * Creates a new function that wraps the function `f` to accept any number of
   * agruments. The last named parameter will be given an array of arguments.
   *
   * @static
   * @function
   * @param {function} f A function to be wrapped.
   * @returns {function} A new function.
   * @example
   *   function foo(head, tail) { ... }
   *   variadic(foo)(1, 2, 3) == foo(1, [2, 3])
   */
  variadic: variadic,

  /**
   * Applies the side-effecting function `f` to the value `a` and returns the
   * value `a`.
   *
   * @static
   * @function
   * @param {function} f A function to be applied.
   * @param {*} a A value.
   * @returns {*} The value `a`.
   * @example tap(f)(a) == a
   */
  tap: curry(function(f, a) { f(a); return a; }),

  /**
   * Compares the values `a` and `b` using natural ordering.
   *
   * @static
   * @curried
   * @function
   * @param {*} a - A value.
   * @param {*} b - A value.
   * @returns {boolean} The ordering of `a` and `b`.
   * @example
   *   compare(1, 2)
   *   // -> -1
   *   compare('foo', 'bar')
   *   // -> 1
   */
  compare: curry(function(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }),
};
