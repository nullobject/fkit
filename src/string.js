'use strict';

var fn = require('./fn');

/**
 * This module defines string functions.
 *
 * @module fkit/string
 * @summary Strings
 * @author Josh Bassett
 */
module.exports = {
  /**
   * @summary Converts a string to uppercase.
   *
   * @param s A string.
   * @returns A new string.
   */
  toUpper: function(s) { return s.toUpperCase(); },

  /**
   * @summary Converts a string to lowercase.
   *
   * @param s A string.
   * @returns A new string.
   */
  toLower: function(s) { return s.toLowerCase(); },

  /**
   * Replaces the `a` with string `b` in the string `s`.
   *
   * @summary Creates a new string with some or all matches of a pattern
   * replaced by a string.
   *
   * @example
   *   replace('r', 'z', 'bar'); // baz
   *   replace(/$hello/, 'goodbye', 'hello world!'); // goodbye world!
   *
   * @curried
   * @function
   * @param a A term to be replaced.
   * @param b A string to replace the term.
   * @param s A string to search.
   * @returns A new string.
   */
  replace: fn.curry(function(a, b, s) {
    return s.replace(a, b);
  }),
};
