/** @author Josh Bassett */

'use strict';

var __slice = Array.prototype.slice;

function curry(f, env) {
  var arity = f.length;

  if (env === void 0) {
    env = this;
  }

  return given([]);

  function given(argsSoFar) {
    return function() {
      var updatedArgsSoFar = argsSoFar.concat(__slice.call(arguments, 0));

      if (updatedArgsSoFar.length >= arity) {
        return f.apply(env, updatedArgsSoFar);
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

function apply(f, a) {
  return f.call(null, a);
}

function flip(f) {
  return function(a, b) {
    return f(b, a);
  };
}

/**
 * @module fn
 */
module.exports = {
  /**
   * Creates a new function that returns its first argument.
   *
   * @returns {function} A new function.
   * @example identity(a) == a
   */
  identity: function(a) {
    return a;
  },

  /**
   * Applies the function `f` to the value `a`.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {function} f
   * @param {*} a
   * @returns {*} The result.
   * @example apply(f, a) == f(a)
   */
  apply: curry(apply),

  /**
   * Applies the function `f` to the value `a`.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {*} a
   * @param {function} f
   * @returns {*} The result.
   * @example applyRight(a, f) == f(a)
   */
  applyRight: curry(flip(apply)),

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
   * Wraps the binary function `f` and flips the order of the arguments.
   *
   * @static
   * @function
   * @param {function} f
   * @returns {function} A new function.
   */
  flip: flip,

  /**
   * Creates a function that always returns the value `c`, regardless of the
   * given arguments.
   *
   * @param {*} c The constant value.
   * @returns {function} A new function.
   * @example const(c)(1, 2, 3, ...) == c
   */
  const: function(c) {
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
   * @param {Object} [env] The value of `this` provided for the call to `f`.
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
   * Creates a new function that wraps the function `f` to accept only two
   * arguments.
   *
   * @param {function} f The function to be wrapped.
   * @returns {function} A new function.
   */
  binary: function(f) {
    if (f.length === 2) {
      return f;
    } else {
      return function(a, b) {
        return f.call(this, a, b);
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
  variadic: variadic
};
