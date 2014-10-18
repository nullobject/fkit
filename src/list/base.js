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
    return (typeof as === 'string');
  },

  /**
   * Returns true if the list of `as` is an array of strings, false otherwise.
   *
   * @private
   */
  isArrayOfStrings: function(as) {
    return Array.isArray(as) &&
      as.length > 0 &&
      as.reduce(function(a, b) { return a && self.isString(b); }, true);
  },

  /**
   * Returns an empty monoid of `as`.
   *
   * @private
   */
  mempty: function(as) {
    return self.isString(as) || self.isArrayOfStrings(as) ? '' : [];
  },

  /**
   * Returns `a` in a pure context.
   *
   * @private
   */
  pure: function(a) {
    return self.isString(a) || self.isArrayOfStrings(a) ? a : [a];
  },

  /**
   * Converts the list of `as` to an array.
   *
   * @private
   */
  toArray: function(as) {
    return self.isString(as) ? as.split('') : as;
  },

  /**
   * Converts the list of `as` to a list of type `t`.
   *
   * @private
   */
  toList: function(as, t) {
    return t === 'string' ? as.join('') : as;
  },

  /**
   * Returns the number of elements in the list of `as`.
   *
   * @summary Gets the length of a list.
   *
   * @example
   *   F.length([1, 2, 3]); // 3
   *   F.length('foo'); // 3
   *
   * @param as A list.
   * @returns A number.
   */
  length: function(as) { return as.length; },

  /**
   * Returns `true` if the list of `as` is empty, `false` otherwise.
   *
   * @summary Determines if a list is empty.
   *
   * @example
   *   F.empty([]); // true
   *   F.empty([1, 2, 3]); // false
   *
   *   F.empty(''); // true
   *   F.empty('foo'); // false
   *
   * @param as A list.
   * @returns A boolean value.
   */
  empty: function(as) { return as.length === 0; },

  /**
   * Returns a list that contains the value `a` appended to the list of `bs`.
   *
   * @summary Appends a value to a list.
   *
   * @example
   *   F.append(3, [1, 2]); // [1, 2, 3]
   *   F.append('o', 'fo'); // 'foo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  append: fn.curry(function(a, bs) {
    return self.isString(bs) ? (bs + a) : bs.concat([a]);
  }),

  /**
   * Returns a list that contains the value `a` prepended to the list of `bs`.
   *
   * @summary Prepends a value to a list.
   *
   * @example
   *   F.prepend(1, [2, 3]); // [1, 2, 3]
   *   F.prepend('f', 'oo'); // 'foo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  prepend: fn.curry(function(a, bs) {
    return self.isString(bs) ? (a + bs) : [a].concat(bs);
  }),

  /**
   * Surrounds the list of `cs` with the values `a` and `b`.
   *
   * @example
   *   F.surround(0, 4, [1, 2, 3]); // [0, 1, 2, 3, 4]
   *   F.surround('(', ')', 'foo'); // '(foo)'
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
   * Returns the first element in the list of `as`.
   *
   * @summary Gets the first element in a list.
   *
   * @example
   *   F.head([1, 2, 3]); // 1
   *   F.head('foo'); // 'f'
   *
   * @param as A list.
   * @returns A value or `undefined` if the list is empty.
   */
  head: function(as) { return as[0]; },

  /**
   * Returns the last element in the list of `as`.
   *
   * @summary Gets the last element in a list.
   *
   * @example
   *   F.last([1, 2, 3]); // 3
   *   F.last('foo'); // 'o'
   *
   * @param as A list.
   * @returns A value or `undefined` if the list is empty.
   */
  last: function(as) { return as[as.length - 1]; },

  /**
   * Returns a list that contains the elements before the last element in the
   * list of `as`.
   *
   * @summary Gets the elements before the last element in a list.
   *
   * @example
   *   F.init([1, 2, 3]); // [1, 2]
   *   F.init('foo'); // 'fo'
   *
   * @param as A list.
   * @returns A new list.
   */
  init: function(as) { return as.slice(0, as.length - 1); },

  /**
   * Returns a list that contains the elements after the first element in the
   * list of `as`.
   *
   * @summary Get the elements after the first element in a list.
   *
   * @example
   *   F.tail([1, 2, 3]); // [2, 3]
   *   F.tail('foo'); // 'oo'
   *
   * @param as A list.
   * @returns A new list.
   */
  tail: function(as) { return as.slice(1); },

  /**
   * Returns a list that contains all initial segments of the list of `as`.
   *
   * @summary Gets all initial segments of a list.
   *
   * @example
   *   F.inits([1, 2, 3]); // [[], [1], [1, 2], [1, 2, 3]]
   *   F.inits('foo'); // ['', 'f', 'fo', 'foo']
   *
   * @param as A list.
   * @returns A new list.
   */
  inits: function inits(as) {
    return self.prepend(
      self.mempty(as),
      self.empty(as) ? [] : inits(self.tail(as)).map(self.prepend(self.head(as)))
    );
  },

  /**
   * Returns a list that contains all final segments of the list of `as`.
   *
   * @summary Gets all final segments of a list.
   *
   * @example
   *   F.tails([1, 2, 3]); // [[1, 2, 3], [2, 3], [3], []]
   *   F.tails('foo'); // ['foo', 'oo', 'o', '']
   *
   * @param as A list.
   * @returns A new list.
   */
  tails: function tails(as) {
    return self.prepend(
      as,
      self.empty(as) ? [] : tails(self.tail(as))
    );
  },
};
