'use strict';

var util = require('./util');

/**
 * FKit treats both arrays and strings as *lists*: an array is a list of
 * elements, and a string is a list of characters.
 *
 * Representing strings as lists may be a novel concept for JavaScript users,
 * but it is quite common in other languages. This seemingly simple
 * abstractions yields a great deal of power. It allows you to use all the
 * functions and combinators you would normally use with arrays on strings.
 *
 * @module fkit/list
 * @mixes module:fkit/list/base
 * @mixes module:fkit/list/build
 * @mixes module:fkit/list/fold
 * @mixes module:fkit/list/map
 * @mixes module:fkit/list/search
 * @mixes module:fkit/list/set
 * @mixes module:fkit/list/zip
 * @summary Working with Lists
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
