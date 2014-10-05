'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    fold = require('./fold'),
    math = require('../math');

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
   *   take(2, [1, 2, 3]); // [1, 2]
   *   take(2, []); // []
   *   take(2, 'foo'); // 'fo'
   *   take(2, ''); // ''
   *
   * @curried
   * @function
   * @param n A number.
   * @param as A list.
   * @returns A new list.
   */
  take: fn.curry(function(n, as) {
    var s = base.mempty(as),
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
   *   drop(2, [1, 2, 3]); // [3]
   *   drop(2, []); // []
   *   drop(2, 'foo'); // 'o'
   *   drop(2, ''); // ''
   *
   * @curried
   * @function
   * @param n A number.
   * @param as A list.
   * @returns A new list.
   */
  drop: fn.curry(function(n, as) {
    var s = base.mempty(as),
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
   *   function p(a) { return a < 3; }
   *   takeWhile(p, [1, 2, 3]); // [1, 2]
   *   takeWhile(p, []); // []
   *   function q(a) { return a !== 'o'; }
   *   takeWhile(q, 'foo'); // 'f'
   *   takeWhile(q, ''); // ''
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A new list.
   */
  takeWhile: fn.curry(function(p, as) {
    var s = base.mempty(as),
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
   *   function p(a) { return a < 3; }
   *   dropWhile(p, [1, 2, 3]); // [3]
   *   dropWhile(p, []); // []
   *   function q(a) { return a !== 'o'; }
   *   dropWhile(q, 'foo'); // 'oo'
   *   dropWhile(q, ''); // ''
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A new list.
   */
  dropWhile: fn.curry(function(p, as) {
    var s = base.mempty(as),
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
   * Splits the list of `as` into two lists: a prefix of length `n` and the
   * remainder of the list.
   *
   * @summary Splits a list.
   *
   * @example
   *   splitAt(1, [1, 2, 3]); // [[1], [2, 3]]
   *   splitAt(1, 'foo'); // ['f', 'oo']
   *
   * @curried
   * @function
   * @param n A number.
   * @param as A list.
   * @returns A pair of lists.
   */
  splitAt: fn.curry(function(n, as) {
    return [
      self.take(n, as),
      self.drop(n, as)
    ];
  }),

  /**
   * Splits the list of `as` into two lists: a prefix of elements that satisfy
   * the predicate function `p` and the remainder of the list.
   *
   *
   * @summary Splits a list using a predicate function.
   *
   * @example
   *   function p(a) { return a < 3; }
   *   span(p, [1, 2, 3]); // [[1, 2], [3]]
   *   function q(a) { return a !== 'o'; }
   *   span(q, 'foo'); // ['f', 'oo']
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A pair of lists.
   */
  span: fn.curry(function(p, as) {
    return [
      self.takeWhile(p, as),
      self.dropWhile(p, as)
    ];
  }),

  /**
   * Groups the elements in the list of `as` into sublists of equal elements.
   *
   * @summary Groups the elements in a list.
   *
   * @example
   *   group([1, 2, 2, 3, 3, 3]); // [[1], [2, 2], [3, 3, 3]]
   *   group('Mississippi'); // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
   *
   * @function
   * @param as A list.
   * @returns A new list.
   */
  group: function(as) {
    return self.groupBy(math.eq, as);
  },

  /**
   * Groups the elements in the list of `as` into sublists that satisfy the
   * the comparator function `f`.
   *
   * @summary Groups the elements in a list using a comparator function.
   *
   * @curried
   * @function
   * @param f A comparator function.
   * @param as A list.
   * @returns A new list.
   */
  groupBy: fn.curry(function groupBy(f, bs) {
      var b  = base.head(bs),
          cs = self.span(f(b), base.tail(bs));
      return base.empty(bs) ?
        [] :
        base.prepend(
          base.prepend(b, base.head(cs)),
          groupBy(f, base.last(cs))
        );
  }),
};
