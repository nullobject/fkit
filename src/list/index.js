'use strict';

var util = require('../util');

/**
 * This module defines operations on lists.
 *
 * @module list
 * @author Josh Bassett
 */
module.exports = util.extend({}, [
  require('./build'),
  require('./fold'),
  require('./map'),
  require('./zip'),
]);
