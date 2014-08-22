'use strict';

var Stream = require('./stream');

function Bus() {
  var env = this;
  Stream.call(this, function(next, done) {
    env.push = next;
    env.done = done;
  });
}

Bus.prototype = new Stream();

Bus.prototype.constructor = Bus;

module.exports = Bus;
