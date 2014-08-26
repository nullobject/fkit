'use strict';

var Stream = require('../src/stream'),
    events = require('events'),
    fn     = require('../src/function');

describe('Stream', function() {
  var next, done;

  beforeEach(function() {
    next = sinon.spy();
    done = sinon.spy();
  });

  describe('.fromArray', function() {
    it('should return a stream of values from the given array', function() {
      var stream = Stream.fromArray([1, 2, 3]);

      stream.subscribe(next, done);

      [1, 2, 3].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('.fromCallback', function() {
    it('should return a stream of values from the callback function', function() {
      var emit;
      var stream = Stream.fromCallback(function(callback) {
        emit = callback;
      });

      stream.subscribe(next, done);

      [1, 2, 3].map(function(a, index) {
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
      var stream = Stream.fromEvent(emitter, 'lol');

      stream.subscribe(next, done);

      [1, 2, 3].map(function(a, index) {
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
      var stream = Stream.fromPromise({then: function(callback) {
        emit = callback;
      }});

      stream.subscribe(next, done);

      [1, 2, 3].map(function(a, index) {
        emit(a);
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.called).to.be.false;
    });
  });

  describe('#subscribe', function() {
    it('should be called when the next value is available', function() {
      var stream = Stream.fromArray([1, 2, 3]);

      stream.subscribe(next, done);

      [1, 2, 3].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('.of', function() {
    it('should return a stream with the given value', function() {
      var stream = Stream.of(1);

      stream.subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.true;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#flatMap', function() {
    it('should flat map the given function over stream values', function() {
      var stream = Stream.fromArray([1, 2, 3]);
      var f = function(a) { return Stream.of(a); };

      stream.flatMap(f).subscribe(next, done);

      [1, 2, 3].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#map', function() {
    it('should map the given function over stream values', function() {
      var stream = Stream.fromArray([1, 2, 3]);

      stream.map(fn.inc).subscribe(next, done);

      [2, 3, 4].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#filter', function() {
    it('should filter the stream values with the given predicate', function() {
      var stream = Stream.fromArray([1, 2, 3]);

      stream.filter(fn.eql(2)).subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.false;
      expect(next.calledWithExactly(2)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.false;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#fold', function() {
    it('should fold the given function over stream values', function() {
      var stream = Stream.fromArray([1, 2, 3]);

      stream.fold(0, fn.add).subscribe(next, done);

      expect(next.calledWithExactly(6)).to.be.true;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#scan', function() {
    it('should scan the given function over stream values', function() {
      var stream = Stream.fromArray([1, 2, 3]);

      stream.scan(0, fn.add).subscribe(next, done);

      [0, 1, 3, 6].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#merge', function() {
    it('should merge the given stream', function() {
      var stream = Stream.fromArray([1, 2, 3]),
          t = Stream.fromArray([4, 5, 6]),
          u = Stream.fromArray([7, 8, 9]);

      stream.merge(t, u).subscribe(next, done);

      [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });
});
