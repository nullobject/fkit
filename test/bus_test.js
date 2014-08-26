'use strict';

var Bus = require('../src/bus'),
    fn  = require('../src/function');

describe('Bus', function() {
  var a, b, c, d;

  beforeEach(function() {
    a = sinon.spy();
    b = sinon.spy();
    c = sinon.spy();
    d = sinon.spy();
  });

  describe('#push', function() {
    it('should push a value onto the bus and notify the subscribers', function() {
      var bus = new Bus();

      bus.subscribe(a, b);
      bus.subscribe(c, d);
      bus.push(1);

      expect(a.calledWithExactly(1)).to.be.true;
      expect(b.calledAfter(a)).to.be.false;
      expect(c.calledWithExactly(1)).to.be.true;
      expect(d.calledAfter(c)).to.be.false;
    });
  });
});
