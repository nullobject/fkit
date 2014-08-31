'use strict';

var Stream = require('./stream');

/**
 * Creates a new bus.
 *
 * @class
 * @augments Stream
 * @author Josh Bassett
 */
function Bus() {
  var env = this;

  Stream.call(this, function(next, done) {
    /**
     * Pushes a value `a` onto the stream.
     *
     * @function Bus#push
     * @param {*} a A value.
     */
    env.push = next;
  });
}

Bus.prototype = new Stream();

Bus.prototype.constructor = Bus;

module.exports = Bus;
