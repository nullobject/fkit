'use strict';

var fn = require('./fn');

/**
 * This module defines string functions.
 *
 * @module string
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Converts the string `s` to uppercase.
   *
   * @param {String} s
   * @returns {String} The result.
   */
  toUpper: function(s) { return s.toUpperCase(); },

  /**
   * Converts the string `s` to lowercase.
   *
   * @param {String} s
   * @returns {String} The result.
   */
  toLower: function(s) { return s.toLowerCase(); },

  /**
   * Replaces `a` with `b` in the string `s`.
   *
   * @static
   * @curried
   * @function
   * @param {String|RegExp} a
   * @param {String} b
   * @param {String} s
   * @returns {String} The result.
   */
  replace: fn.curry(function(a, b, s) {
    return s.replace(a, b);
  }),
};
