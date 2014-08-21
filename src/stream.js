'use strict';

var fn = require('./function');

function Stream(fork) {
  this.fork = fork;
}

Stream.prototype.constructor = Stream;

Stream.fromArray = function(a) {
  return new Stream(function(next, done) {
    a.map(next);
    return done();
  });
};

Stream.fromEvent = function(target, type) {
  return new Stream(function(next, done) {
    if (target.on) {
      target.on(type, next);
    } else if (target.addEventListener) {
      target.addEventListener(type, function(e) { next(e.detail); });
    }
  });
};

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

Stream.prototype.fold = function(a, f) {
  var env = this;
  return new Stream(
    function(next, done) {
      return env.fork(
        function(b) {
          a = f(a, b);
          return a;
        },
        function() {
          next(a);
          return done();
        }
      );
    }
  );
};

module.exports = Stream;
