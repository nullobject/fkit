'use strict';

var Stream = require('../src/stream'),
    events = require('events'),
    fn     = require('../src/function');


describe('stream', function() {
  var spy;

  beforeEach(function() {
    spy = sinon.spy();
  });

  describe('.fromArray', function() {
    it('should return a stream of values from the given array', function(done) {
      var s = Stream.fromArray([1, 2, 3]);

      s.fork(spy, done);

      expect(spy.calledWith(1)).to.be.true;
      expect(spy.calledWith(2)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
    });
  });

  describe('.fromEvent', function() {
    it('should return a stream of values from the given event', function() {
      var emitter = new events.EventEmitter();
      var s = Stream.fromEvent(emitter, 'lol');

      s.fork(spy);

      emitter.emit('lol', 1);
      emitter.emit('lol', 2);
      emitter.emit('lol', 3);

      expect(spy.calledWith(1)).to.be.true;
      expect(spy.calledWith(2)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
    });
  });

  describe('#fork', function() {
    it('should be called when the next value is available', function(done) {
      var s = Stream.fromArray([1, 2, 3]);

      s.fork(spy, done);

      expect(spy.calledWith(1)).to.be.true;
      expect(spy.calledWith(2)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
    });
  });

  describe('#map', function() {
    it('should map the given function over stream values', function(done) {
      var s = Stream.fromArray([1, 2, 3]);

      s.map(fn.inc).fork(spy, done);

      expect(spy.calledWith(2)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
      expect(spy.calledWith(4)).to.be.true;
    });
  });

  describe('#fold', function() {
    it('should fold the given function over stream values', function(done) {
      var s = Stream.fromArray([1, 2, 3]);

      s.fold(0, fn.add).fork(spy, done);

      expect(spy.calledWith(6)).to.be.true;
    });
  });

  describe('#scan', function() {
    it('should scan the given function over stream values', function(done) {
      var s = Stream.fromArray([1, 2, 3]);

      s.scan(0, fn.add).fork(spy, done);

      expect(spy.calledWith(1)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
      expect(spy.calledWith(6)).to.be.true;
    });
  });
});
