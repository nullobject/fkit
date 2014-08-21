'use strict';

var Stream = require('../src/stream'),
    fn     = require('../src/function');


describe('stream', function() {
  var push;

  var s = new Stream(function(next, done) {
    push = next;
  });

  describe('#fork', function() {
    it('should be called when the next value is available', function() {
      var spy = sinon.spy();

      s.fork(spy);

      push(1);
      push(2);
      push(3);

      expect(spy.calledWith(1)).to.be.true;
      expect(spy.calledWith(2)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
    });
  });

  describe('#map', function() {
    it('should apply the given function to values in the stream', function() {
      var spy = sinon.spy();

      s.map(fn.inc).fork(spy);

      push(1);
      push(2);
      push(3);

      expect(spy.calledWith(2)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
      expect(spy.calledWith(4)).to.be.true;
    });
  });

  describe('#scan', function() {
    it('should scan the stream', function() {
      var spy = sinon.spy();

      s.scan(0, fn.add).fork(spy);

      push(1);
      push(2);
      push(3);

      expect(spy.calledWith(1)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
      expect(spy.calledWith(6)).to.be.true;
    });
  });
});
