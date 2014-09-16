'use strict';

var util = require('./util');

/**
 * @author Josh Bassett
 */
module.exports = util.extend({
  Signal: require('./signal')
}, [
  require('./fn'),
  require('./list'),
  require('./list/build'),
  require('./list/fold'),
  require('./list/map'),
  require('./list/zip'),
  require('./logic'),
  require('./math'),
  require('./obj'),
  require('./string'),
]);
