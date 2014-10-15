'use strict';

var util = require('./util');

/**
 * This module mixes in the functions and classes from all the other FKit
 * modules. It's available as a convenience, however if you don't need all of
 * FKit then you can require just the module that you need.
 *
 * @module fkit
 * @summary ALL THE THINGS!
 * @author Josh Bassett
 */
module.exports = util.extend({}, [
  require('./fn'),
  require('./list'),
  require('./logic'),
  require('./math'),
  require('./obj'),
  require('./string'),
]);
