'use strict';

var base   = require('./base'),
    fn     = require('../fn'),
    fold   = require('./fold'),
    search = require('./search');

var self;

/**
 * This module defines set operations on lists.
 *
 * @private
 * @module fkit/list/set
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Creates a new list which is the union of the lists of `as` and `bs`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} as
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  union: fn.curry(function(as, bs) {
    return fold.fold(function(cs, b) {
      return (search.elem(b, cs)) ? cs : base.append(b, cs);
    }, as, bs);
  }),

  /**
   * Creates a new list which is the intersection of the lists of `as` and
   * `bs`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} as
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  intersect: fn.curry(function(as, bs) {
    return fold.fold(function(cs, b) {
      return (search.elem(b, as)) ? base.append(b, cs) : cs;
    }, base.mempty(as), bs);
  }),

  /**
   * Removes the element `a` from the list of `bs`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} a
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  without: fn.curry(function(a, bs) {
    return fold.fold(function(cs, b) {
      return (b === a) ? cs : base.append(b, cs);
    }, base.mempty(bs), bs);
  }),

  /**
   * Creates a new list which is the difference of the lists of `as` and `bs`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} as
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  difference: fn.curry(function(as, bs) {
    return fold.fold(fn.flip(self.without), bs, as);
  }),
};
