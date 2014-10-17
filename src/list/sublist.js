'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    fold = require('./fold');

var self;

/**
 * This module defines sublist operations on lists.
 *
 * @private
 * @module fkit/list/sublist
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns the prefix of `n` elements from the list of `as`.
   *
   * @summary Gets the prefix of a list.
   *
   * @example
   *   F.take(2, [1, 2, 3]); // [1, 2]
   *   F.take(2, 'foo'); // 'fo'
   *
   * @curried
   * @function
   * @param n A number.
   * @param as A list.
   * @returns A new list.
   */
  take: fn.curry(function(n, as) {
    var s = base.isString(as) ? '' : [],
        m = as.length;

    for (var i = 0; i < Math.min(m, n); i++) {
      s = s.concat(as[i]);
    }

    return s;
  }),

  /**
   * Returns the suffix after dropping `n` elements from the list of `as`.
   *
   * @summary Gets the suffix of a list.
   *
   * @example
   *   F.drop(2, [1, 2, 3]); // [3]
   *   F.drop(2, 'foo'); // 'o'
   *
   * @curried
   * @function
   * @param n A number.
   * @param as A list.
   * @returns A new list.
   */
  drop: fn.curry(function(n, as) {
    var s = base.isString(as) ? '' : [],
        m = as.length;

    for (var i = n; i < m; i++) {
      s = s.concat(as[i]);
    }

    return s;
  }),

  /**
   * Returns the prefix of elements from the list of `as` while the predicate
   * function `p` is satisfied.
   *
   * @summary Gets the prefix of a list using a predicate function.
   *
   * @example
   *   F.takeWhile(F.lt(3), [1, 2, 3]); // [1, 2]
   *   F.takeWhile(F.neq(o), 'foo'); // 'f'
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A new list.
   */
  takeWhile: fn.curry(function(p, as) {
    var s = base.isString(as) ? '' : [],
        n = as.length;

    for (var i = 0; i < n && p(as[i]); i++) {
      s = s.concat(as[i]);
    }

    return s;
  }),

  /**
   * Returns the suffix after dropping elements from the list of `as` while
   * the predicate function `p` is satisfied.
   *
   * @summary Gets the suffix of a list using a predicate function.
   *
   * @example
   *   F.dropWhile(F.lt(3), [1, 2, 3]); // [3]
   *   F.dropWhile(F.neq(o), 'foo'); // 'oo'
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A new list.
   */
  dropWhile: fn.curry(function(p, as) {
    var s = base.isString(as) ? '' : [],
        m = as.length,
        n = 0;

    while (p(as[n]) && n < as.length) {
      n++;
    }

    for (var i = n; i < m; i++) {
      s = s.concat(as[i]);
    }

    return s;
  }),

  /**
   * Returns a list that contains the elements in the list of `as` split into a
   * pair of lists: a prefix of length `n` and the remainder of the list.
   *
   * @summary Splits a list.
   *
   * @example
   *   F.splitAt(1, [1, 2, 3]); // [[1], [2, 3]]
   *   F.splitAt(1, 'foo'); // ['f', 'oo']
   *
   * @curried
   * @function
   * @param n A number.
   * @param as A list.
   * @returns A pair of lists.
   */
  splitAt: fn.curry(function(n, as) {
    return [self.take(n, as), self.drop(n, as)];
  }),

  /**
   * Returns a list that contains the elements in the list of `as` split into a
   * pair of lists: a prefix of elements that satisfy the predicate function
   * `p` and the remainder of the list.
   *
   * @summary Splits a list using a predicate function.
   *
   * @example
   *   F.span(F.lt(3), [1, 2, 3]); // [[1, 2], [3]]
   *   F.span(F.neq(o), 'foo'); // ['f', 'oo']
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A pair of lists.
   */
  span: fn.curry(function(p, as) {
    return [self.takeWhile(p, as), self.dropWhile(p, as)];
  }),

  /**
   * Returns a list that contains the elements in the list of `as` grouped into
   * sublists of equal elements.
   *
   * It is a special case of the `groupBy` function where the elements are
   * compared using the strict equality `===` operator.
   *
   * @summary Groups the elements in a list.
   *
   * @example
   *   F.group([1, 2, 2, 3, 3, 3]); // [[1], [2, 2], [3, 3, 3]]
   *   F.group('Mississippi'); // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
   *
   * @param as A list.
   * @returns A new list.
   */
  group: function(as) { return self.groupBy(fn.equal, as); },

  /**
   * Returns a list that contains the elements in the list of `as` grouped into
   * sublists that satisfy the comparator function `f`.
   *
   * @summary Groups the elements in a list using a comparator function.
   *
   * @curried
   * @function
   * @param f A comparator function.
   * @param as A list.
   * @returns A new list.
   */
  groupBy: fn.curry(function groupBy(f, as) {
    var b  = base.head(as),
        bs = self.span(f(b), base.tail(as));

    return base.empty(as) ?
      [] :
      base.prepend(
        base.prepend(b, base.head(bs)),
        groupBy(f, base.last(bs))
      );
  }),
};
