'use strict';

var Bus = require('../src/bus'),
    fn  = require('../src/function');

describe('Bus', function() {
  var next, done;

  beforeEach(function() {
    next = sinon.spy();
    done = sinon.spy();
  });

  describe('#push', function() {
    it('should push a value onto the bus', function() {
      var b = new Bus();

      b.subscribe(next, done);
      b.push(1);

      expect(next.calledWithExactly(1)).to.be.true;
      expect(done.called).to.be.false;
    });
  });
});
