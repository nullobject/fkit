/** @author Josh Bassett */

'use strict';

var Stream = require('./stream'),
    fn     = require('./function');

/**
 * Creates a new bus.
 *
 * @constructor
 * @augments Stream
 */
function Bus() {
  var env = this;

  this.as = [];
  this.bs = [];

  Stream.call(this, function(next, done) {
    env.as.push(next);
    env.bs.push(done);
  });
}

Bus.prototype = new Stream();

Bus.prototype.constructor = Bus;

/**
 * Pushes the value `a` onto the stream.
 *
 * @param {*} a A value.
 */
Bus.prototype.push = function(a) {
  this.as.map(fn.apply(a));
};

module.exports = Bus;
