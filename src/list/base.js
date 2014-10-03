'use strict';

var fn = require('../fn');

var self;

/**
 * This module defines basic operations on lists.
 *
 * @private
 * @module fkit/list/base
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns true if `as` is a string or an array of strings.
   *
   * @private
   */
  isString: function(as) {
    return typeof as === 'string' || (as.length > 0 && as.reduce(function(a, b) { return a && (typeof b === 'string'); }, true));
  },

  /**
   * Returns an empty monoid of `as`.
   *
   * @private
   */
  mempty: function(as) {
    return self.isString(as) ? '' : [];
  },

  /**
   * Returns `a` in a pure context.
   *
   * @private
   */
  pure: function(a) {
    return self.isString(a) ? a : [a];
  },

  /**
   * Converts the list of `as` to an array.
   *
   * @private
   */
  toArray: function(as) {
    return (typeof as === 'string') ? as.split('') : as;
  },

  /**
   * Appends the value `a` to the list of `bs`.
   *
   * @example
   *   append(3, [1, 2]); // [1, 2, 3]
   *   append('o', 'fo'); // 'foo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  append: fn.curry(function(a, bs) {
    return (typeof bs === 'string') ? (bs + a) : bs.concat(a);
  }),

  /**
   * Prepends the value `a` to the list of `bs`.
   *
   * @example
   *   prepend(1, [2, 3]); // [1, 2, 3]
   *   prepend('f', 'oo'); // 'foo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  prepend: fn.curry(function(a, bs) {
    return (typeof bs === 'string') ? (a + bs) : [a].concat(bs);
  }),

  /**
   * Surrounds the list of `cs` with the values `a` and `b`.
   *
   * @example
   *   surround(0, 4, [1, 2, 3]); // [0, 1, 2, 3, 4]
   *   surround('(', ')', 'foo'); // '(foo)'
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @param cs A list.
   * @returns A new list.
   */
  surround: fn.curry(function(a, b, cs) {
    return self.append(b, self.prepend(a, cs));
  }),

  /**
   * @summary Gets the first element in a list.
   *
   * @example
   *   head([]); // undefined
   *   head([1, 2, 3]); // 1
   *   head(''); // undefined
   *   head('foo'); // 'f'
   *
   * @param as A list.
   * @returns A value or `undefined` if the list is empty.
   */
  head: function(as) { return as[0]; },

  /**
   * @summary Get the elements after the first element in a list.
   *
   * @example
   *   tail([1, 2, 3]); // [2, 3]
   *   tail('foo'); // 'oo'
   *
   * @param as A list.
   * @returns A new list.
   */
  tail: function(as) { return as.slice(1); },

  /**
   * @summary Gets the elements before the last element in a list.
   *
   * @example
   *   init([1, 2, 3]); // [1, 2]
   *   init('foo'); // 'fo'
   *
   * @param as A list.
   * @returns A new list.
   */
  init: function(as) { return as.slice(0, as.length - 1); },

  /**
   * @summary Gets the last element in a list.
   *
   * @example
   *   last([]); // undefined
   *   last([1, 2, 3]); // 3
   *   last(''); // undefined
   *   last('foo'); // 'o'
   *
   * @param as A list.
   * @returns A value or `undefined` if the list is empty.
   */
  last: function(as) { return as[as.length - 1]; },

  /**
   * @summary Gets the length of a list.
   *
   * @example
   *   head([1, 2, 3]); // 3
   *   head('foo'); // 3
   *
   * @param as A list.
   * @returns A number.
   */
  length: function(as) { return as.length; },

  /**
   * @summary Tests whether a list is empty.
   *
   * @example
   *   empty([1, 2, 3]); // false
   *   empty([]); // true
   *   empty('foo'); // false
   *   empty(''); // true
   *
   * @param as A list.
   * @returns A boolean value.
   */
  empty: function(as) { return as.length === 0; },

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
    var s = self.mempty(as),
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
    var s = self.mempty(as),
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
    var s = self.mempty(as),
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
   *   function q(a) { return a !== 'f'; }
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
    var s = self.mempty(as),
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
};
