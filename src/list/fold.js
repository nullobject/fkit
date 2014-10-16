'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    math = require('../math');

var self;

/**
 * This module defines fold operations on lists.
 *
 * @private
 * @module fkit/list/fold
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Flattens any strings in the list of `as`.
   *
   * @private
   */
  flattenStrings: function flattenStrings(as) {
    if (base.isArrayOfStrings(as)) {
      return self.concat(as);
    } else {
      if (Array.isArray(as)) {
        return as.map(flattenStrings);
      } else {
        return as;
      }
    }
  },

  /**
   * Returns a list that contains the elements in the list of `as` concatenated
   * with the starting value `s`.
   *
   * @private
   */
  concatWith: fn.curry(function(s, as) {
    return base
      .toArray(fn.flatten(as))
      .reduce(fn.flip(base.append), s);
  }),

  /**
   * Returns a list that contains the concatenated elements in the list of
   * `as`.
   *
   * @summary Concatenates lists.
   *
   * @example
   *   F.concat([1], [2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
   *   F.concat('f', 'oo', 'bar'); // 'foobar'
   *
   * @function
   * @param as A list.
   * @returns A new list.
   */
  concat: fn.variadic(function(as) {
    return self.concatWith(base.mempty(as), as);
  }),

  /**
   * Returns a list that contains the elements in the list of `as` mapped with
   * the function `f` concatenated together.
   *
   * @summary Maps a function over a list and concatenates the results.
   *
   * @example
   *   F.concatMap(function(a) {
   *     return [a, 0];
   *   }, [1, 2, 3]); // [1, 0, 2, 0, 3, 0]
   *
   *   F.concatMap(function(a) {
   *     return [a, '-'];
   *   }, 'foo'); // 'f-o-o-'
   *
   * @curried
   * @function
   * @param f A function.
   * @param as A list.
   * @returns A new list.
   */
  concatMap: fn.curry(function(f, as) {
    var bs = base.toArray(as).map(fn.compose(self.flattenStrings, f)),
        cs = bs.length > 0 ? bs : as;

    return self.concatWith(base.mempty(cs), bs);
  }),

  /**
   * Returns a list that contains the elements in the list of `as` folded
   * left-to-right with the binary function `f` and starting value `s`.
   *
   * @summary Folds a list from left to right with a function.
   *
   * @example
   *   F.fold(F.flip(F.prepend), [], [1, 2, 3]); // [3, 2, 1]
   *   F.fold(F.flip(F.prepend), '', 'foo'); // 'oof'
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
   * Returns a list that contains the elements in the list of `as` folded
   * right-to-left with the binary function `f` and starting value `s`.
   *
   * @summary Folds a list from right to left with a function.
   *
   * @example
   *   F.foldRight(F.append, [], [1, 2, 3]); // [3, 2, 1]
   *   F.foldRight(F.append, '', 'foo'); // 'oof'
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
   * Returns a list that contains the elements in the list of `as` scanned
   * left-to-right with the binary function `f` and starting value `s`.
   *
   * @summary Scans a list from left to right with a function.
   *
   * @example
   *   F.fold(F.flip(F.prepend), [],  [1, 2, 3]); // [[], [1], [2, 1], [3, 2, 1]]
   *   F.fold(F.flip(F.prepend), '',  'foo'); // ['', 'f', 'of', 'oof']
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
   * Returns a list that contains the elements in the list of `as` scanned
   * right-to-left with the binary function `f` and starting value `s`.
   *
   * @summary Scans a list from right to left with a function.
   *
   * @example
   *   F.foldRight(F.append, [],  [1, 2, 3]); // [[3, 2, 1], [3, 2], [3], []]
   *   F.foldRight(F.append, '',  'foo'); // ['oof', 'oo', 'o', '']
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
   * Returns the maximum value in the list of `as`.
   *
   * @summary Calculates the maximum value of a list.
   *
   * @example
   *   F.maximum([1, 2, 3]); // 3
   *   F.maximum('abc'); // 'c'
   *
   * @param as A list.
   * @returns A value.
   */
  maximum: function(as) { return self.fold(math.max, as[0], as); },

  /**
   * Returns the minimum value in the list of `as`.
   *
   * @summary Calculates the minimum value of a list.
   *
   * @example
   *   F.minimum([1, 2, 3]); // 1
   *   F.minimum('abc'); // 'a'
   *
   * @param as A list.
   * @returns A value.
   */
  minimum: function(as) { return self.fold(math.min, as[0], as); },

  /**
   * Returns the sum of the elements in the list of `as`.
   *
   * @summary Calculates the sum of the elements in a list.
   *
   * @example
   *   F.sum([1, 2, 3]); // 6
   *
   * @param as A list.
   * @returns A number.
   */
  sum: function(as) { return self.fold(math.add, 0, as); },

  /**
   * Returns the product of the elements in the list of `as`.
   *
   * @summary Calculates the product of the elements in a list.
   *
   * @example
   *   F.product([1, 2, 3]); // 6
   *
   * @param as A list.
   * @returns A number.
   */
  product: function(as) { return self.fold(math.mul, 1, as); },
};
