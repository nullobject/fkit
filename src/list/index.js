'use strict';

var util = require('../util');

module.exports = util.extend({}, [
  require('./base'),
  require('./build'),
  require('./fold'),
  require('./map'),
  require('./search'),
  require('./zip'),
]);
