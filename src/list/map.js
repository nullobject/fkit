'use strict';

var fn   = require('../fn'),
    fold = require('./fold'),
    list = require('../list');

/**
 * This module defines map operations on lists.
 *
 * @module list/map
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
   * Filters the list of `as` with the predicate function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  filter: fn.curry(function(p, as) {
    if (typeof as === 'string') {
      return fold.concatMap(function(a) {
        return p(a) ? a : '';
      }, as);
    } else {
      return as.filter(p);
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
    return list
      .toArray(as)
      .reduce(fn.flip(list.prepend), list.mempty(as));
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
    return fold.concat(
      list.head(as),
      prependToAll(list.tail(as))
    );

    function prependToAll(as) {
      if (list.empty(as)) {
        return list.mempty(as);
      } else {
        return fold.concat(
          s,
          list.head(as),
          prependToAll(list.tail(as))
        );
      }
    }
  }),
};
