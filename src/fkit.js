'use strict';

var util = require('./util');

/**
 * @module core
 * @author Josh Bassett
 */
module.exports = util.extend({
  Signal: require('./signal')
}, [
  require('./core'),
  require('./fn'),
  require('./list'),
  require('./obj')
]);
