'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    fold = require('./fold'),
    map = require('./map'),
    math = require('../math');

var self;

/**
 * This module defines operations for building lists.
 *
 * @private
 * @module fkit/list/build
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns an array of length `n`.
   *
   * @summary Creates a new array.
   *
   * @example
   *   F.array(3); // [undefined, undefined, undefined]
   *
   * @param n A number.
   * @returns A new array.
   */
  array: function(n) { return Array.apply(null, Array(n)); },

  /**
   * Returns an string of length `n`.
   *
   * @summary Creates a new string.
   *
   * @example
   *   F.string(3); // '   '
   *
   * @param n A number.
   * @returns A new string.
   */
  string: function(n) { return self.array(n + 1).join(' '); },

  /**
   * Returns an ordered pair with the values `a` and `b`.
   *
   * @summary Creates a new ordered pair.
   *
   * @example
   *   F.pair(1, 2); // [1, 2]
   *   F.pair('a', 'b'); // ['a', 'b']
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A new pair.
   */
  pair: fn.curry(function(a, b) { return [a, b]; }),

  /**
   * Returns an array of numbers of length `n` starting from `a`.
   *
   * @summary Creates a new array of numbers.
   *
   * @example
   *   F.range(1, 3); // [1, 2, 3]
   *
   * @curried
   * @function
   * @param a A number.
   * @param n A number.
   * @returns A new array.
   */
  range: fn.curry(function(a, n) {
    return self.array(n).map(function(_, i) { return a + i; });
  }),

  /**
   * Returns a list of length `n` with `a` the value of every element.
   *
   * @summary Replicates a value.
   *
   * @example
   *   F.replicate(3, 1); // [1, 1, 1]
   *   F.replicate(3, 'a'); // 'aaa'
   *
   * @curried
   * @function
   * @param n A number.
   * @param a A value.
   * @returns A new list.
   */
  replicate: fn.curry(function(n, a) {
    var as = base.isString(a) ? self.string(n) : self.array(n);
    return fold.concatMap(function() { return [a]; }, as);
  }),

  /**
   * Returns a list of `n` elements randomly sampled from the list of `as`.
   *
   * @summary Samples random elements from a list.
   *
   * @example
   *   F.sample(2, [1, 2, 3]); // [3, 1]
   *   F.sample(2, 'abc'); // 'ca'
   *
   * @curried
   * @function
   * @param n A number.
   * @param a A list.
   * @returns A new list.
   */
  sample: fn.curry(function(n, as) {
    var m  = as.length,
        r  = self.array(Math.min(m, n)),
        bs = map.map(f, r),
        s  = base.isString(as) ? '' : [];

    return fold.concatWith(s, bs);

    function f() {
      return as[math.randomInt(0, m - 1)];
    }
  }),
};
