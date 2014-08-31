'use strict';

var Stream = require('../src/stream'),
    events = require('events'),
    util   = require('../src/util');

describe('Stream', function() {
  var bind, next, done;

  beforeEach(function() {
    bind = sinon.spy();
    next = sinon.spy();
    done = sinon.spy();
  });

  describe('.fromArray', function() {
    it('should return a stream of values from the given array', function() {
      var s = Stream.fromArray(util.range(1, 3));

      s.subscribe(next, done);

      util.range(1, 3).map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('.fromCallback', function() {
    it('should return a stream of values from the callback function', function() {
      var emit;
      var s = Stream.fromCallback(function(callback) {
        emit = callback;
      });

      s.subscribe(next, done);

      util.range(1, 3).map(function(a, index) {
        emit(a);
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.called).to.be.false;
    });
  });

  describe('.fromEvent', function() {
    it('should return a stream of values from the given event', function() {
      var emitter = new events.EventEmitter();
      var s = Stream.fromEvent(emitter, 'lol');

      s.subscribe(next, done);

      util.range(1, 3).map(function(a, index) {
        emitter.emit('lol', a);
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.called).to.be.false;
    });
  });

  describe('.fromPromise', function() {
    it('should return a stream of values from the promise', function() {
      var emit;
      var s = Stream.fromPromise({then: function(callback) {
        emit = callback;
      }});

      s.subscribe(next, done);

      util.range(1, 3).map(function(a, index) {
        emit(a);
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.called).to.be.false;
    });
  });

  describe('.of', function() {
    it('should return a stream with the given value', function() {
      var s = Stream.of(1);

      s.subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.true;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#subscribe', function() {
    var s, a = {}, b = {}, c = {}, d = {};

    beforeEach(function() {
      s = new Stream(bind);
    });

    it('should bind the stream with the given callbacks', function() {
      s.subscribe(a, b);
      expect(bind.calledOnce).to.be.true;
      expect(bind.calledWithExactly(a, b)).to.be.true;
    });
  });

  describe('#flatMap', function() {
    it('should flat map the given function over stream values', function() {
      var s = Stream.fromArray(util.range(1, 3));
      var f = function(a) { return Stream.of(a); };

      s.flatMap(f).subscribe(next, done);

      util.range(1, 3).map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#map', function() {
    it('should map the given function over stream values', function() {
      var s = Stream.fromArray(util.range(1, 3));

      s.map(util.inc).subscribe(next, done);

      [2, 3, 4].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#filter', function() {
    it('should filter the stream values with the given predicate', function() {
      var s = Stream.fromArray(util.range(1, 3));

      s.filter(util.eql(2)).subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.false;
      expect(next.calledWithExactly(2)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.false;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#fold', function() {
    it('should fold the given function over stream values', function() {
      var s = Stream.fromArray(util.range(1, 3));

      s.fold(0, util.add).subscribe(next, done);

      expect(next.calledWithExactly(6)).to.be.true;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#scan', function() {
    it('should scan the given function over stream values', function() {
      var s = Stream.fromArray(util.range(1, 3));

      s.scan(0, util.add).subscribe(next, done);

      [0, 1, 3, 6].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#merge', function() {
    it('should merge the given streams', function() {
      var s = Stream.fromArray(util.range(1, 3)),
          t = Stream.fromArray(util.range(4, 6)),
          u = Stream.fromArray(util.range(7, 9));

      s.merge(t, u).subscribe(next, done);

      util.range(1, 9).map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#split', function() {
    it('should split the given stream', function() {
      var streams = Stream.fromArray(util.range(1, 3)).split(2),
          t       = streams[0],
          u       = streams[1];

      t.subscribe(next, done);
      u.subscribe(function() {}, function() {});

      util.range(1, 3).map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });
});
