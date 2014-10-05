'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    math = require('../math');

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
   *   concat([1], [2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
   *   concat('f', 'oo', 'bar'); // 'foobar'
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
   * @example
   *   function p(a) { return [a, 0]; }
   *   concatMap(p, [1, 2, 3]); // [1, 0, 2, 0, 3, 0]
   *
   *   function q(a) { return a + '-'; }
   *   concatMap(q, 'foo'); // 'f-o-o-'
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
    return concat(fn.flatten(bs));
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

  /**
   * Returns the maximum value from the list of `as`.
   *
   * @summary Calculates the maximum value of a list.
   *
   * @curried
   * @function
   * @param as A list.
   * @returns A value.
   */
  maximum: fn.curry(function(as) {
    return self.fold(math.max, as[0], as);
  }),

  /**
   * Returns the minimum value from the list of `as`.
   *
   * @summary Calculates the minimum value of a list.
   *
   * @curried
   * @function
   * @param as A list.
   * @returns A value.
   */
  minimum: fn.curry(function(as) {
    return self.fold(math.min, as[0], as);
  }),

  /**
   * Returns the sum of the elements in the list of `as`.
   *
   * @summary Calculates the sum the elements in a list.
   *
   * @curried
   * @function
   * @param as A list.
   * @returns A number.
   */
  sum: fn.curry(function(as) {
    return self.fold(math.add, 0, as);
  }),

  /**
   * Returns the product of the elements in the list of `as`.
   *
   * @summary Calculates the product the elements in a list.
   *
   * @curried
   * @function
   * @param as A list.
   * @returns A number.
   */
  product: fn.curry(function(as) {
    return self.fold(math.mul, 1, as);
  }),
};
