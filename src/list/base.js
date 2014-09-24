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
   * @static
   * @curried
   * @function
   * @param {*} a - A value.
   * @param {Array|String} bs - A list.
   * @returns {Array|String} The result.
   * @example
   *   append(3, [1, 2]); // [1, 2, 3]
   *   append('o', 'fo'); // 'foo'
   */
  append: fn.curry(function(a, bs) {
    return (typeof bs === 'string') ? bs + a : bs.concat(a);
  }),

  /**
   * Prepends the value `a` to the list of `bs`.
   *
   * @static
   * @curried
   * @function
   * @param {*} a - A value.
   * @param {Array|String} bs - A list.
   * @returns {Array|String} The result.
   * @example
   *   prepend(1, [2, 3]); // [1, 2, 3]
   *   prepend('f', 'oo'); // 'foo'
   */
  prepend: fn.curry(function(a, bs) {
    return (typeof bs === 'string') ?  a + bs : [a].concat(bs);
  }),

  /**
   * Surrounds the list of `cs` with the values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {*} a - A value.
   * @param {*} b - A value.
   * @param {Array|String} cs - A list.
   * @returns {Array|String} The result.
   * @example
   *   surround(0, 4, [1, 2, 3]); // [0, 1, 2, 3, 4]
   *   surround('(', ')', 'foo'); // '(foo)'
   */
  surround: fn.curry(function(a, b, cs) {
    return self.append(b, self.prepend(a, cs));
  }),

  /**
   * Returns the first element in the list of `as`.
   *
   * @param {Array|String} as - A list.
   * @returns {*} The head element.
   * @example
   *   head([1, 2, 3]); // 1
   *   head('foo'); // 'f'
   */
  head: function(as) { return as[0]; },

  /**
   * Returns the elements after the first element in the list of `as`.
   *
   * @param {Array|String} as - A list.
   * @returns {Array|String} The tail elements.
   * @example
   *   tail([1, 2, 3]); // [2, 3]
   *   tail('foo'); // 'oo'
   */
  tail: function(as) { return as.slice(1); },

  /**
   * Returns the elements before the last element in the list of `as`.
   *
   * @param {Array|String} as - A list.
   * @returns {Array|String} The initial elements.
   * @example
   *   init([1, 2, 3]); // [1, 2]
   *   init('foo'); // 'fo'
   */
  init: function(as) { return as.slice(0, as.length - 1); },

  /**
   * Returns the last element in the list of `as`.
   *
   * @param {Array|String} as - A list.
   * @returns {*} The last element.
   * @example
   *   head([1, 2, 3]); // 3
   *   head('foo'); // 'o'
   */
  last: function(as) { return as[as.length - 1]; },

  /**
   * Returns the length of the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as - A list.
   * @returns {number} The length of `as`.
   * @example
   *   head([1, 2, 3]); // 3
   *   head('foo'); // 3
   */
  length: function(as) { return as.length; },

  /**
   * Test whether the list of `as` is empty.
   *
   * @param {Array|String} as - A list.
   * @returns {boolean} The result.
   * @example
   *   empty([1, 2, 3]); // false
   *   empty([]); // true
   *   empty('foo'); // false
   *   empty(''); // true
   */
  empty: function(as) { return as.length === 0; },
};
