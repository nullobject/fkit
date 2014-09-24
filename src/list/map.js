'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    fold = require('./fold');

/**
 * This module defines map operations on lists.
 *
 * @private
 * @module fkit/list/map
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Maps the list of `as` with the function `f`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {Array} as
   * @returns {Array|String} The result.
   */
  map: fn.curry(function(f, as) {
    if (typeof as === 'string') {
      return fold.concatMap(f, as);
    } else {
      return as.map(f);
    }
  }),

  /**
   * Returns the elements of list of `as` in reverse order.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  reverse: function(as) {
    return base
      .toArray(as)
      .reduce(fn.flip(base.prepend), base.mempty(as));
  },

  /**
   * Intersperses the elements of list of `as` with a separator `s`.
   *
   * @static
   * @function
   * @param {*} s A separator.
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  intersperse: fn.curry(function(s, as) {
    return fold.concat(base.head(as), prependToAll(base.tail(as)));

    function prependToAll(bs) {
      if (base.empty(bs)) {
        return base.mempty(as);
      } else {
        return fold.concat(
          s,
          base.head(bs),
          prependToAll(base.tail(bs))
        );
      }
    }
  }),

  /**
   * Applies the list of functions `fs` to the value `a`.
   *
   * @deprecated
   * @static
   * @curried
   * @function
   * @param {Array} fs
   * @param {*} a
   * @returns {Array} The results.
   */
  applyAll: fn.curry(function(fs, a) {
    return fs.map(fn.applyRight(a));
  }),
};
