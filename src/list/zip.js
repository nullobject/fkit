'use strict';

var base  = require('./base'),
    build = require('./build'),
    fn    = require('../fn');

var self;

/**
 * This module defines zip operations on lists.
 *
 * @private
 * @module fkit/list/zip
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Zips the lists of `as` and `bs` with the function `f`.
   *
   * @curried
   * @function
   * @param f A binary function.
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  zipWith: fn.curry(function(f, as, bs) {
    var n = Math.min(as.length, bs.length);
    return base
      .toArray(as.slice(0, n))
      .map(function(a, i) { return f(a, bs[i]); });
  }),

  /**
   * Zips the lists of `as` and `bs` into a list of pairs.
   *
   * @example
   *   zip([1, 2, 3], [4, 5, 6]); // [[1, 4], [2, 5], [3, 6]]
   *   zip('foo', 'bar'); // [['f', 'b'], ['o', 'a'], ['o', 'r']]
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  zip: fn.curry(function(as, bs) { return self.zipWith(build.pair, as, bs); }),

  /**
   * Unzips a list of pairs into a pair of lists of `as` and `bs`.
   *
   * @example
   *   unzip([[1, 4], [2, 5], [3, 6]]); // [[1, 2, 3], [4, 5, 6]]
   *   unzip([['f', 'b'], ['o', 'a'], ['o', 'r']]); // ['foo', 'bar']
   *
   * @param as A list.
   * @returns A new list.
   */
  unzip: function(as) {
    var s = base.mempty(as[0]);
    return as.reduceRight(function(p, ps) {
      var a = ps[0], b = ps[1], as = p[0], bs = p[1];
      return [base.prepend(a, as), base.prepend(b, bs)];
    }, build.pair(s, s));
  },
};
