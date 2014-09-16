'use strict';

var fn = require('./fn');

function length(as) { return as.length; }

function append(a, b) {
  if (typeof b === 'string') {
    return b + a;
  } else {
    return b.concat(a);
  }
}

function prepend(a, b) {
  if (typeof b === 'string') {
    return a + b;
  } else {
    return [a].concat(b);
  }
}

/**
 * This module defines basic operations on lists.
 *
 * @module list
 * @author Josh Bassett
 */
module.exports = {
  // Returns an empty monoid.
  mempty: function(as) {
    return (as && typeof as[0] === 'string') ? '' : [];
  },

  // Returns a value in a pure context.
  pure: function(x) {
    return (x && typeof x[0] === 'string') ? x : [x];
  },

  toArray: function(as) {
    if (typeof as === 'string') {
      return as.split('');
    } else {
      return as;
    }
  },

  /**
   * Appends `a` to `b`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} a
   * @param {*} b
   * @returns {Array|String} The result.
   */
  append: fn.curry(append),

  /**
   * Prepends `a` to `b`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} a
   * @param {*} b
   * @returns {Array|String} The result.
   */
  prepend: fn.curry(prepend),

  /**
   * Returns the first element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {*} The result.
   */
  head: function(as) { return as[0]; },

  /**
   * Returns the elements after the first element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  tail: function(as) { return as.slice(1); },

  /**
   * Returns the elements before the last element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  init: function(as) { return as.slice(0, as.length - 1); },

  /**
   * Returns the last element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {*} The result.
   */
  last: function(as) { return as[as.length - 1]; },

  /**
   * Returns the length of the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {number} The length.
   */
  length: length,

  /**
   * Test whether the list of `as` is empty.
   *
   * @param {Array|String} as
   * @returns {boolean} The result.
   */
  empty: function(as) { return length(as) === 0; },
};
