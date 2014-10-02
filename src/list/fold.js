'use strict';

var base = require('./base'),
    fn   = require('../fn');

var self;

function concat(as) {
  return base
    .toArray(as)
    .reduce(fn.flip(base.append), base.mempty(as));
}

/**
 * This module defines fold operations on lists.
 *
 * @private
 * @module fkit/list/fold
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Concatenates the list of `as`.
   *
   * @summary Concatenates two or more lists.
   *
   * @example
   *   concat([1, 2, 3], [4]); // [1, 2, 3, 4]
   *   concat('foo', 'bar'); // 'foobar'
   *
   * @function
   * @param as A list.
   * @returns A new list.
   */
  concat: fn.variadic(concat),

  /**
   * Maps and concatenates the list of `as` with the function `f`.
   *
   * @summary Maps a function over a list and concatenates the results.
   *
   * @curried
   * @function
   * @param f A function.
   * @param as A list.
   * @returns A new list.
   */
  concatMap: fn.curry(function(f, as) {
    // Map the function over the elements in the list and concatenate the
    // result with an empty list. We need to include an empty list so that the
    // kind of the original list is not lost when we do the concatenation step.
    var bs = base
      .toArray(as)
      .map(f)
      .concat(base.mempty(as));
    return concat(bs);
  }),

  /**
   * Folds the list of `as` with the binary function `f` and starting value
   * `s`.
   *
   * @summary Folds a list from left to right.
   *
   * @curried
   * @function
   * @param f A binary function.
   * @param s A starting value.
   * @param as A list.
   * @returns A value.
   */
  fold: fn.curry(function(f, s, as) {
    return base
      .toArray(as)
      .reduce(f, s);
  }),

  /**
   * Folds the list of `as` with the binary function `f` and starting value
   * `s`.
   *
   * @summary Folds a list from right to left.
   *
   * @curried
   * @function
   * @param f A binary function.
   * @param s A starting value.
   * @param as A list.
   * @returns A value.
   */
  foldRight: fn.curry(function(f, s, as) {
    return base
      .toArray(as)
      .reduceRight(fn.flip(f), s);
  }),

  /**
   * Scans the list of `as` with the binary function `f` and starting value
   * `s`.
   *
   * @summary Scans a list from left to right.
   *
   * @curried
   * @function
   * @param f A binary function.
   * @param s A starting value.
   * @param as A list.
   * @returns A new list.
   */
  scan: fn.curry(function(f, s, as) {
    var r = [s];
    self.fold(function(b, a) {
      return fn.tap(r.push.bind(r), f(b, a));
    }, s, as);
    return r;
  }),

  /**
   * Scans the list of `as` with the binary function `f` and starting value
   * `s`.
   *
   * @summary Scans a list from right to left.
   *
   * @curried
   * @function
   * @param f A binary function.
   * @param s A starting value.
   * @param as A list.
   * @returns A new list.
   */
  scanRight: fn.curry(function(f, s, as) {
    var r = [s];
    self.foldRight(function(a, b) {
      return fn.tap(r.unshift.bind(r), f(a, b));
    }, s, as);
    return r;
  }),
};
