'use strict';

var base = require('./base'),
    build = require('./build'),
    fn   = require('../fn');

function zipWith(f, as, bs) {
  var n = Math.min(as.length, bs.length);
  return base
    .toArray(as.slice(0, n))
    .map(function(a, i) { return f(a, bs[i]); });
}

/**
 * This module defines zip operations on lists.
 *
 * @module list
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Zips the lists of `as` and `bs` with the function `f`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {Array|String} as
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  zipWith: fn.curry(zipWith),

  /**
   * Zips the lists of `as` and `bs` into a list of pairs.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} as
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  zip: fn.curry(function(as, bs) { return zipWith(build.pair, as, bs); }),

  /**
   * Unzips a list of pairs into a pair of lists of `as` and `bs`.
   *
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  unzip: function(as) {
    var s = base.mempty(as[0]);
    return as.reduceRight(function(p, ps) {
      var a = ps[0], b = ps[1],
          as = p[0], bs = p[1];
      return [base.prepend(a, as), base.prepend(b, bs)];
    }, build.pair(s, s));
  },
};
