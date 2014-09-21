'use strict';

var util = require('./util');

/**
 * FKit is a [functional
 * programming](http://en.wikipedia.org/wiki/Functional_programming) library
 * for JavaScript. It consists of a small number of functions and classes that
 * are squarely focused on everyday utility. This provides developers with
 * functional programming "building blocks" that they can use to write better,
 * more expressive code.
 *
 * @module fkit
 * @author Josh Bassett
 */
module.exports = util.extend({
  Signal: require('./signal')
}, [
  require('./fn'),
  require('./list'),
  require('./logic'),
  require('./math'),
  require('./obj'),
  require('./string'),
]);
