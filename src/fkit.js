/** @author Josh Bassett */

'use strict';

var core = require('./core');

module.exports = core.extend(core, [
  require('./fn'),
  require('./obj'),
  {
    Bus: require('./bus'),
    Stream: require('./stream')
  }
]);
