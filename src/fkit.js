'use strict';

module.exports = {
  Bus:    require('./bus'),
  Stream: require('./stream'),

  fn:  require('./function'),
  obj: require('./object'),

  log: function(x) { console.log(x); }
};
