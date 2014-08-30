'use strict';

var Bus = require('../src/bus'),
    fn  = require('../src/function');

describe('Bus', function() {
  var b, next, done;

  beforeEach(function() {
    b = new Bus();
    next = sinon.spy();
    done = sinon.spy();
  });

  describe('#push', function() {
    it('should push a value onto the bus and notify the subscriber', function() {
      b.subscribe(next, done);
      b.push(1);

      expect(next.calledOnce).to.be.true;
      expect(next.calledWithExactly(1)).to.be.true;
      expect(done.called).to.be.false;
    });
  });
});
