'use strict';

var util = require('../util');

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
 * @summary Lists
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
