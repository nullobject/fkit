'use strict';

var Stream = require('../src/stream'),
    events = require('events'),
    fn     = require('../src/function');


describe('stream', function() {
  var next, done;

  beforeEach(function() {
    next = sinon.spy();
    done = sinon.spy();
  });

  describe('.fromArray', function() {
    it('should return a stream of values from the given array', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.true;
      expect(next.calledWithExactly(2)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.true;
      expect(done.called).to.be.true;
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

      expect(next.calledWithExactly(1)).to.be.true;
      expect(next.calledWithExactly(2)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.true;
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
      expect(done.called).to.be.true;
    });
  });

  describe('#map', function() {
    it('should map the given function over stream values', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.map(fn.inc).subscribe(next, done);

      expect(next.calledWithExactly(2)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.true;
      expect(next.calledWithExactly(4)).to.be.true;
      expect(done.called).to.be.true;
    });
  });

  describe('#fold', function() {
    it('should fold the given function over stream values', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.fold(0, fn.add).subscribe(next, done);

      expect(next.calledWithExactly(6)).to.be.true;
      expect(done.called).to.be.true;
    });
  });

  describe('#scan', function() {
    it('should scan the given function over stream values', function() {
      var s = Stream.fromArray([1, 2, 3]);

      s.scan(0, fn.add).subscribe(next, done);

      expect(next.calledWithExactly(1)).to.be.true;
      expect(next.calledWithExactly(3)).to.be.true;
      expect(next.calledWithExactly(6)).to.be.true;
      expect(done.called).to.be.true;
    });
  });
});
