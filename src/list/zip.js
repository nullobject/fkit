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
   * Returns the lists of `as` and `bs` zipped with the binary function `f`.
   *
   * @summary Zips two lists with a function.
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
   * Returns the lists of `as` and `bs` zipped into a list of pairs.
   *
   * It is a special case of the `zipWith` function where the elements are combined
   * using the `F.pair` function.
   *
   * @summary Zips two lists into list of pairs.
   *
   * @example
   *   F.zip([1, 2, 3], [4, 5, 6]); // [[1, 4], [2, 5], [3, 6]]
   *   F.zip('foo', 'bar'); // [['f', 'b'], ['o', 'a'], ['o', 'r']]
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  zip: fn.curry(function(as, bs) {
    return self.zipWith(build.pair, as, bs);
  }),

  /**
   * Returns the list of pairs `as` unzipped into a pair of lists.
   *
   * @summary Unzips a list of pairs into a pair of lists.
   *
   * @example
   *   F.unzip([[1, 4], [2, 5], [3, 6]]); // [[1, 2, 3], [4, 5, 6]]
   *   F.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']]); // ['foo', 'bar']
   *
   * @param as A list.
   * @returns A new list.
   */
  unzip: function(as) {
    var s = base.mempty(as[0]);

    return as.reduceRight(function(p, ps) {
      var a = ps[0], b = ps[1], as = p[0], bs = p[1];
      return [base.prepend(a, as), base.prepend(b, bs)];
    }, [s, s]);
  },
};
