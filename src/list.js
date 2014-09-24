'use strict';

var util = require('./util');

/**
 * This module defines operations on lists.
 *
 * @module fkit/list
 * @mixes module:fkit/list/base
 * @mixes module:fkit/list/build
 * @mixes module:fkit/list/fold
 * @mixes module:fkit/list/map
 * @mixes module:fkit/list/search
 * @mixes module:fkit/list/zip
 * @summary List Functions And Combinators
 * @author Josh Bassett
 */
module.exports = util.extend({}, [
  require('./list/base'),
  require('./list/build'),
  require('./list/fold'),
  require('./list/map'),
  require('./list/search'),
  require('./list/set'),
  require('./list/zip'),
]);
