'use strict';

var util = require('./util');

function flatten(as) {
  return as.reduce(function(a, b) { return a.concat(b); }, []);
}

function curry(f) {
  var arity = f.length;

  return (arity <= 1) ? f : given([], 0);

  function given(args, applications) {
    return function() {
      var newArgs = args.concat(
        (arguments.length > 0) ? util.slice.call(arguments, 0) : undefined
      );

      return (newArgs.length >= arity) ?
        f.apply(this, newArgs) :
        given(newArgs, applications + 1);
    };
  }
}

function variadic(f) {
  var arity = f.length;

  if (arity < 1) {
    return f;
  } else if (arity === 1)  {
    return function() {
      var args    = util.slice.call(arguments, 0),
          newArgs = (arguments.length === 1) ? flatten(args) : args;

      return f.call(this, newArgs);
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
   * Returns the result of the function `f` applied to the value `a`.
   *
   * @summary Applies a function to a value.
   *
   * @example
   *   function sayHi(a) { return ['Hi', a, '!'].join(' '); }
   *   F.apply(sayHi, 'Jane'); // Hi Jane!
   *
   * @curried
   * @function
   * @param f A function.
   * @param a A value.
   * @returns The result of `f(a)`.
   */
  apply: curry(function(f, a) { return f(a); }),

  /**
   * Returns the result of the function `f` applied to the values `a` and `b`.
   *
   * @summary Applies a function to two values.
   *
   * @example
   *   function sayHi(a, b) { return ['Hi', a, b, '!'].join(' '); }
   *   F.apply2(sayHi, 'Jane', 'Appleseed'); // Hi Jane Appleseed!
   *
   * @curried
   * @function
   * @param f A function.
   * @param a A value.
   * @param b A value.
   * @returns The result of `f(a, b)`.
   */
  apply2: curry(function(f, a, b) { return f(a, b); }),

  /**
   * Returns the result of the function `f` applied to the values `a`, `b`, and
   * `c`.
   *
   * @summary Applies a function to three values.
   *
   * @example
   *   function sayHi(a, b, c) { return ['Hi', a, b, c, '!'].join(' '); }
   *   F.apply3(sayHi, 'Ms', 'Jane', 'Appleseed'); // Hi Ms Jane Appleseed!
   *
   * @curried
   * @function
   * @param f A function.
   * @param a A value.
   * @param b A value.
   * @param c A value.
   * @returns The result of `f(a, b, c)`.
   */
  apply3: curry(function(f, a, b, c) { return f(a, b, c); }),

  /**
   * Returns the result of the function `f` applied to the value `a`.
   *
   * This is similar to `apply`, however the order of the arguments is flipped.
   *
   * @summary Applies a function to a value.
   *
   * @example
   *   function sayHi(a) { return ['Hi', a, '!'].join(' '); }
   *   F.applyRight('Jane', sayHi); // Hi Jane!
   *
   * @curried
   * @function
   * @param a A value.
   * @param f A function.
   * @returns The result of `f(a)`.
   */
  applyRight: curry(function(a, f) { return f(a); }),

  /**
   * Returns a function that is the composition of the list of functions `fs`.
   *
   * @summary Composes a list of functions.
   *
   * @example
   *   F.compose(f, g, h)(a); // f(g(h(a)))
   *
   * @function
   * @param fs A list of functions.
   * @returns A new function.
   */
  compose: variadic(function(fs) {
    return function(a) {
      return fs.reduceRight(function(a, f) {
        return f(a);
      }, a);
    };
  }),

  /**
   * Returns the result of applying the function `f` to the values `b` and `a`.
   *
   * @summary Flips the order of the arguments to a function.
   *
   * @example
   *   function f(a, b) { ... }
   *   var g = F.flip(f);
   *   g(1, 2); // f(2, 1)
   *
   * @param f A function.
   * @param a A value.
   * @param b A value.
   * @returns A new function.
   */
  flip: curry(function(f, a, b) { return f(b, a); }),

  /**
   * Returns the value `a` unchanged.
   *
   * @summary The identity function.
   *
   * @example
   *   F.id(1); // 1
   *
   * @param a A value.
   * @returns The value `a`.
   */
  id: function(a) { return a; },

  /**
   * Returns a function that always returns the value `c`, regardless of the
   * arguments.
   *
   * @summary The constant function.
   *
   * @example
   *   F.const(1)(2, 3); // 1
   *
   * @param c A value.
   * @returns A new function.
   */
  const: function(c) { return function() { return c; }; },

  /**
   * Returns a function that allows partial application of the arguments to the
   * function `f`.
   *
   * @summary Converts a function to a curried function.
   *
   * @example
   *   var add = F.curry(function(a, b) { return a + b; });
   *   add(1)(2); // 3
   *
   * @function
   * @param f A function.
   * @returns A new function.
   */
  curry: curry,

  /**
   * Returns a function that wraps the binary function `f` to accept a pair.
   *
   * @summary Converts a binary function to a function on pairs.
   *
   * @example
   *   var add = F.uncurry(function(a, b) { return a + b; });
   *   add([1, 2]); // 3
   *
   * @function
   * @param f A function.
   * @returns A new function.
   */
  uncurry: curry(function(f, p) { return f(p[0], p[1]); }),

  /**
   * Returns a function that wraps the function `f` to accept only one argument.
   *
   * @summary Converts a function to a unary function.
   *
   * @param f A function.
   * @returns A new function.
   */
  unary: function(f) { return (f.length === 1) ? f : self.apply(f); },

  /**
   * Returns a function that wraps the function `f` to accept only two arguments.
   *
   * @summary Converts a function to a binary function.
   *
   * @param f A function.
   * @returns A new function.
   */
  binary: function(f) { return (f.length === 2) ? f : self.apply2(f); },

  /**
   * Returns a function that wraps the function `f` to accept any number of
   * arguments.
   *
   * The last named parameter will be given an array of arguments.
   *
   * @summary Converts a function to a variadic function.
   *
   * @example
   *   function f(head, tail) { ... }
   *   F.variadic(f)(1, 2, 3); // f(1, [2, 3])
   *
   * @function
   * @param f A function.
   * @returns A new function.
   */
  variadic: variadic,

  /**
   * Applies the function `f` to the value `a` and returns the value `a`
   * unchanged.
   *
   * @summary Applies a side-effecting function to a value.
   *
   * @example
   *   function f(a) { console.log(a); }
   *   F.tap(f)(1); // 1
   *
   * @curried
   * @function
   * @param f A function.
   * @param a A value.
   * @returns The value `a`.
   */
  tap: curry(function(f, a) { f(a); return a; }),

  /**
   * Returns `true` if the value `a` is strictly equal (`===`) to the value
   * `b`, false otherwise.
   *
   * @summary The strict equality operator.
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A boolean value.
   */
  equal: curry(function(a, b) { return b === a; }),

  /**
   * Returns `true` if the value `a` is strictly not equal (`!==`) to the value
   * `b`, false otherwise.
   *
   * @summary The strict inequality operator.
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A boolean value.
   */
  notEqual: curry(function(a, b) { return b !== a; }),

  /**
   * Returns the ordering of the two values `a` and `b`.
   *
   * @summary Compares two values using natural ordering.
   *
   * @example
   *   F.compare(1, 2); // -1
   *   F.compare(2, 1); // 1
   *   F.compare(2, 2); // 0
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
