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
      var s = Stream.fromArray([1, 2, 3]);

      s.subscribe(next, done);

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
      var s = Stream.fromCallback(function(callback) {
        emit = callback;
      });

      s.subscribe(next, done);

      emit(1);
      emit(2);
      emit(3);

      [1, 2, 3].map(function(a, index) {
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

      emitter.emit('lol', 1);
      emitter.emit('lol', 2);
      emitter.emit('lol', 3);

      [1, 2, 3].map(function(a, index) {
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

      emit(1);
      emit(2);
      emit(3);

      [1, 2, 3].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.called).to.be.false;
    });
  });

  describe('#subscribe', function() {
    it('should be called when the next value is available', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.true;
      expect(next.calledWithExactly(2)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.true;
      expect(done.calledAfter(next)).to.be.true;
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

  describe('#flatMap', function() {
    it('should flat map the given function over stream values', function() {
      var s = Stream.fromArray([1, 2, 3]);
      var f = function(a) { return Stream.of(a); };

      s.flatMap(f).subscribe(next, done);

      [1, 2, 3].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#map', function() {
    it('should map the given function over stream values', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.map(fn.inc).subscribe(next, done);

      [2, 3, 4].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#filter', function() {
    it('should filter the stream values with the given predicate', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.filter(fn.eql(2)).subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.false;
      expect(next.calledWithExactly(2)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.false;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#fold', function() {
    it('should fold the given function over stream values', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.fold(0, fn.add).subscribe(next, done);

      expect(next.calledWithExactly(6)).to.be.true;
      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#scan', function() {
    it('should scan the given function over stream values', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.scan(0, fn.add).subscribe(next, done);

      [0, 1, 3, 6].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });

  describe('#merge', function() {
    it('should merge the given stream', function() {
      var s = Stream.fromArray([1, 2, 3]),
          t = Stream.fromArray([4, 5, 6]),
          u = Stream.fromArray([7, 8, 9]);

      s.merge(t, u).subscribe(next, done);

      [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function(a, index) {
        var call = next.getCall(index);
        expect(call.calledWithExactly(a)).to.be.true;
      });

      expect(done.calledAfter(next)).to.be.true;
    });
  });
});
