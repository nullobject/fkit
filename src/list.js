'use strict';

var util = require('./util');

/**
 * FKit treats both arrays and strings as *lists*: an array is a list of
 * elements, and a string is a list of characters.
 *
 * Representing strings as lists may be a novel concept for some JavaScript
 * users, but it is quite common in other languages. This seemingly simple
 * abstractions yields a great deal of power: it allows you to apply the same
 * list combinators to both arrays and strings.
 *
 * @summary Working with Lists
 *
 * @module fkit/list
 * @mixes module:fkit/list/base
 * @mixes module:fkit/list/build
 * @mixes module:fkit/list/fold
 * @mixes module:fkit/list/map
 * @mixes module:fkit/list/search
 * @mixes module:fkit/list/set
 * @mixes module:fkit/list/sort
 * @mixes module:fkit/list/sublist
 * @mixes module:fkit/list/zip
 * @author Josh Bassett
 */
module.exports = util.extend({}, [
  require('./list/base'),
  require('./list/build'),
  require('./list/fold'),
  require('./list/map'),
  require('./list/search'),
  require('./list/set'),
  require('./list/sort'),
  require('./list/sublist'),
  require('./list/zip'),
]);
