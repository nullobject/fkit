'use strict';

var util = require('../util');

/**
 * This module defines operations on lists.
 *
 * @module list
 * @author Josh Bassett
 */
module.exports = util.extend({}, [
  require('./base'),
  require('./build'),
  require('./fold'),
  require('./map'),
  require('./search'),
  require('./zip'),
]);
