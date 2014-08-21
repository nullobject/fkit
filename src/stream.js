'use strict';

var fn = require('./function');

function Stream(fork) {
  this.fork = fork;
}

Stream.prototype.constructor = Stream;

Stream.prototype.map = function(f) {
  var env = this;
  return new Stream(function(next, done) {
    env.fork(fn.compose(next, f), done);
  });
};

Stream.prototype.scan = function(a, f) {
  var env = this;
  return new Stream(function(next, done) {
    env.fork(function(b) {
      a = f(a, b);
      return next(a);
    }, done);
  });
};

module.exports = {
  Stream: Stream
};
