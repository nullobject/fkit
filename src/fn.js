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
  /*
   * Flattens the list of `as`.
   *
   * @private
   */
  flatten: flatten,

  /**
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
   * @summary Applies a function to a value.
   *
   * @example
   *   function sayHi(a) { return ['Hi', a, '!'].join(' '); }
   *   apply(sayHi, 'John'); // Hi John!
   *
   * @curried
   * @function
   * @param f A function to be applied.
   * @param a A value.
   * @returns The result of `f(a)`.
   */
  apply: curry(function(f, a) { return f(a); }),

  /**
   * @summary Applies a function to two values.
   *
   * @example
   *   function sayHi(a, b) { return ['Hi', a, b, '!'].join(' '); }
   *   apply2(sayHi, 'John', 'Appleseed'); // Hi John Appleseed!
   *
   * @curried
   * @function
   * @param f A function to be applied.
   * @param a A value.
   * @param b A value.
   * @returns The result of `f(a, b)`.
   */
  apply2: curry(function(f, a, b) { return f(a, b); }),

  /**
   * @summary Applies a function to three values.
   *
   * @example
   *   function sayHi(a, b, c) { return ['Hi', a, b, c, '!'].join(' '); }
   *   apply3(sayHi, 'Mr', 'John', 'Appleseed'); // Hi Mr John Appleseed!
   *
   * @curried
   * @function
   * @param f A function to be applied.
   * @param a A value.
   * @param b A value.
   * @param c A value.
   * @returns The result of `f(a, b, c)`.
   */
  apply3: curry(function(f, a, b, c) { return f(a, b, c); }),

  /**
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
   * @summary Applies a function to a value.
   *
   * @example
   *   function sayHi(a) { return ['Hi', a, '!'].join(' '); }
   *   applyRight('John', sayHi); // Hi John!
   *
   * @curried
   * @function
   * @param a A value.
   * @param f A function to be applied.
   * @returns The result of `f(a)`.
   */
  applyRight: curry(function(a, f) { return f(a); }),

  /**
   * @summary Composes a list of functions.
   *
   * @example
   *   compose(f, g, h)(a); // f(g(h(a)))
   *
   * @function
   * @param fs A list of functions.
   * @returns A new composed function.
   */
  compose: variadic(function(fs) {
    return function(a) {
      return fs.reduceRight(function(a, f) {
        return f(a);
      }, a);
    };
  }),

  /**
   * @summary Wraps a binary function and flips the order of the arguments.
   *
   * @example
   *   function f(a, b) { ... }
   *   var g = flip(f);
   *   g(1, 2); // f(2, 1)
   *
   * @param f A function to be flipped.
   * @returns A new flipped function.
   */
  flip: function(f) { return function(a, b) { return f(b, a); }; },

  /**
   * Returns the value `a` unchanged.
   *
   * @summary The identity function.
   *
   * @example
   *   id(1); // 1
   *
   * @param a A value.
   * @returns A value.
   */
  id: function(a) { return a; },

  /**
   * Creates a new function that always returns the same value, regardless of
   * the arguments.
   *
   * @summary The constant function.
   *
   * @example
   *   const(1)(2, 3); // 1
   *
   * @param c A value.
   * @returns A new constant function.
   */
  const: function(c) { return function() { return c; }; },

  /**
   * @summary Creates a new function that allows partial application of the
   * arguments to a function.
   *
   * @example
   *   var add = curry(function(a, b) { return a + b; });
   *   add(1)(2); // 3
   *
   * @function
   * @param f A function to be curried.
   * @returns A new curried function.
   */
  curry: curry,

  /**
   * @summary Converts a binary function to a function on pairs.
   *
   * @example
   *   var add = uncurry(function(a, b) { return a + b; });
   *   add([1, 2]); // 3
   *
   * @function
   * @param f A function to be uncurried.
   * @param p A pair.
   * @returns A new function on pairs.
   */
  uncurry: curry(function(f, p) { return f(p[0], p[1]); }),

  /**
   * @summary Creates a new function that wraps a function to accept only one
   * argument.
   *
   * @param f A function to be wrapped.
   * @returns A new unary function.
   */
  unary: function(f) { return (f.length === 1) ? f : self.apply(f); },

  /**
   * @summary Creates a new function that wraps a function to accept only two
   * arguments.
   *
   * @param f A function to be wrapped.
   * @returns A new binary function.
   */
  binary: function(f) { return (f.length === 2) ? f : self.apply2(f); },

  /**
   * The last named parameter will be given an array of arguments.
   *
   * @summary Creates a new function that wraps a function to accept any number
   * of arguments.
   *
   * @example
   *   function f(head, tail) { ... }
   *   variadic(f)(1, 2, 3); // f(1, [2, 3])
   *
   * @function
   * @param f A function to be wrapped.
   * @returns A new variadic function.
   */
  variadic: variadic,

  /**
   * @summary Creates a new function that applies a side-effecting function to
   * a value.
   *
   * @example
   *   function f(a) { console.log(a); }
   *   tap(f)(1); // 1
   *
   * @function
   * @param f A function to be tapped.
   * @param a A value.
   * @returns A value.
   */
  tap: curry(function(f, a) { f(a); return a; }),

  /**
   * @summary Compares two values using natural ordering.
   *
   * @example
   *   compare(1, 2); // -1
   *   compare(2, 1); // 1
   *   compare(2, 2); // 0
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A number.
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
