'use strict';

var fn = require('./fn');

/**
 * This module defines string functions.
 *
 * @module fkit/string
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Converts the string `s` to uppercase.
   *
   * @param {String} s
   * @returns {String} A new uppercase string.
   */
  toUpper: function(s) { return s.toUpperCase(); },

  /**
   * Converts the string `s` to lowercase.
   *
   * @param {String} s
   * @returns {String} A new lowercase string.
   */
  toLower: function(s) { return s.toLowerCase(); },

  /**
   * Replaces the term `a` with term `b` in the string `s`.
   *
   * @static
   * @curried
   * @function
   * @param {RegExp|String} a
   * @param {String} b
   * @param {String} s
   * @returns {String} The result.
   * @example
   *   replace('r', 'z', 'bar'); // baz
   *   replace(/$hello/, 'goodbye', 'hello world!'); // goodbye world!
   */
  replace: fn.curry(function(a, b, s) {
    return s.replace(a, b);
  }),
};
