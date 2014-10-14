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
   * Returns the result of replacing term `a` with the string `b` in the string
   * `s`.
   *
   * @summary Replaces a term in a string.
   *
   * @example
   *   F.replace('r', 'z', 'bar'); // baz
   *   F.replace(/$hello/, 'goodbye', 'hello world!'); // goodbye world!
   *
   * @curried
   * @function
   * @param a A string or a regexp.
   * @param b A string.
   * @param s A string.
   * @returns A new string.
   */
  replace: fn.curry(function(a, b, s) {
    return s.replace(a, b);
  }),
};
