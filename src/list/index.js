'use strict';

var util = require('../util');

module.exports = util.extend({}, [
  require('./build'),
  require('./fold'),
  require('./map'),
  require('./zip'),
]);
