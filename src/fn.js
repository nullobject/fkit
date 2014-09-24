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
 * This module defines basic operations on functions.
 *
 * @module fkit/fn
 * @summary Core Functions
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Applies the function `f` to the value `a`.
   *
   * In JavaScript we would normally use the expression `f(a)` to apply a
   * function to a value. This is very concise, however sometimes it's not very
   * useful. You can actully think of function application as a binary
   * operation.
   *
   * For example, say we want to fold right-to-left over a list of functions
   * and apply each function to the accumulated value:
   *
   * ```js
   * F.foldRight(F.apply, 0, [F.add(1), F.div(2), F.mul(3)]);
   * ```
   *
   * @static
   * @curried
   * @function
   * @param {function} f The function to be applied.
   * @param {*} a A value.
   * @returns {*} The result of the function.
   * @example
   *   function sayHi(a) { return ['Hi', a, '!'].join(' '); }
   *   apply(sayHi, 'John'); // Hi John!
   */
  apply: curry(function(f, a) { return f(a); }),

  /**
   * Applies the function `f` to the values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f The function to be applied.
   * @param {*} a A value.
   * @param {*} b A value.
   * @returns {*} The result of the function.
   * @example
   *   function sayHi(a, b) { return ['Hi', a, b, '!'].join(' '); }
   *   apply2(sayHi, 'John', 'Appleseed'); // Hi John Appleseed!
   */
  apply2: curry(function(f, a, b) { return f(a, b); }),

  /**
   * Applies the function `f` to the values `a`, `b`, and `c`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f The function to be applied.
   * @param {*} a A value.
   * @param {*} b A value.
   * @param {*} c A value.
   * @returns {*} The result of the function.
   * @example
   *   function sayHi(a, b, c) { return ['Hi', a, b, c, '!'].join(' '); }
   *   apply3(sayHi, 'Mr', 'John', 'Appleseed'); // Hi Mr John Appleseed!
   */
  apply3: curry(function(f, a, b, c) { return f(a, b, c); }),

  /**
   * Applies the function `f` to the value `a`.
   *
   * It is the same as `apply`, however the order of the arguments is flipped.
   * This can be useful in certain situations.
   *
   * For example, say we want to fold left-to-right over a list of functions
   * and apply each function to the accumulated value:
   *
   * ```js
   * F.fold(F.applyRight, 0, [F.add(1), F.div(2), F.mul(3)]);
   * ```
   *
   * @static
   * @curried
   * @function
   * @param {*} a A value.
   * @param {function} f The function to be applied.
   * @returns {*} The result of the function.
   * @example
   *   function sayHi(a) { return ['Hi', a, '!'].join(' '); }
   *   applyRight('John', sayHi); // Hi John!
   */
  applyRight: curry(function(a, f) { return f(a); }),

  /**
   * Composes the list of functions `fs`.
   *
   * @static
   * @function
   * @param {...function} fs The list of functions to be composed.
   * @returns {function} A new composed function.
   * @example
   *   compose(f, g, h)(a); // f(g(h(a)))
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
   * @param {function} f The function to be flipped.
   * @returns {function} A new flipped function.
   * @example
   *   function f(a, b) { ... }
   *   var g = flip(f);
   *   g(1, 2); // f(2, 1)
   */
  flip: function(f) { return function(a, b) { return f(b, a); }; },

  /**
   * Returns the value `a` unchanged (identity function).
   *
   * @param {*} a A value.
   * @returns {*} The value `a`.
   * @example
   *   id(1); // 1
   */
  id: function(a) { return a; },

  /**
   * Creates a new function that always returns the value `c`, regardless of
   * the arguments (constant function).
   *
   * @param {*} c A value.
   * @returns {function} A new constant function.
   * @example
   *   const(1)(2, 3); // 1
   */
  const: function(c) { return function() { return c; }; },

  /**
   * Creates a new function that allows partial application of the arguments to
   * the function `f`.
   *
   * @static
   * @function
   * @param {function} f The function to be curried.
   * @returns {function} A new curried function.
   * @example
   *   var add = curry(function(a, b) { return a + b; });
   *   add(1)(2); // 3
   */
  curry: curry,

  /**
   * Creates a new function that wraps the function `f` to accept only one
   * argument.
   *
   * @param {function} f The function to be wrapped.
   * @returns {function} A new unary function.
   */
  unary: function(f) { return (f.length === 1) ? f : self.apply(f); },

  /**
   * Creates a new function that wraps the function `f` to accept only two
   * arguments.
   *
   * @param {function} f The function to be wrapped.
   * @returns {function} A new binary function.
   */
  binary: function(f) { return (f.length === 2) ? f : self.apply2(f); },

  /**
   * Creates a new function that wraps the function `f` to accept any number of
   * arguments. The last named parameter will be given an array of arguments.
   *
   * @static
   * @function
   * @param {function} f The function to be wrapped.
   * @returns {function} A new variadic function.
   * @example
   *   function f(head, tail) { ... }
   *   variadic(f)(1, 2, 3); // f(1, [2, 3])
   */
  variadic: variadic,

  /**
   * Creates a new function that applies the side-effecting function `f` to the
   * value `a` and returns the value `a`.
   *
   * @static
   * @function
   * @param {function} f The function to be applied.
   * @param {*} a A value.
   * @returns {*} The value `a`.
   * @example
   *   function f(a) { console.log(a); }
   *   tap(f)(1); // 1
   */
  tap: curry(function(f, a) { f(a); return a; }),

  /**
   * Compares the values `a` and `b` using natural ordering.
   *
   * @static
   * @curried
   * @function
   * @param {number|String} a - A value.
   * @param {number|String} b - A value.
   * @returns {number} The ordering of `a` and `b`.
   * @example
   *   compare(1, 2); // -1
   *   compare(2, 1); // 1
   *   compare(2, 2); // 0
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
