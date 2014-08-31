'use strict';

var fn  = require('../src/fn'),
    obj = require('../src/obj');

function MyObject() {}
MyObject.prototype.constructor = MyObject;

function buildObject() {
  var o = new MyObject();

  o.a = 'lorem';
  o.b = 'ipsum';
  o.c = 1;
  o.d = 2;
  o.e = fn.identity;

  return o;
}

describe('object', function() {
  var target = buildObject();

  describe('#copy', function() {
    var result = obj.copy(target, {b: 'dolor'}, {c: 0});

    it('should copy the properties of the given objects', function() {
      expect(result).to.have.property('a', 'lorem');
      expect(result).to.have.property('b', 'dolor');
      expect(result).to.have.property('c', 0);
      expect(result).to.have.property('d', 2);
    });

    it('should not mutate the target object', function() {
      expect(target).to.have.property('a', 'lorem');
      expect(target).to.have.property('b', 'ipsum');
      expect(target).to.have.property('c', 1);
      expect(target).to.have.property('d', 2);
    });

    it('should preserve the prototype of the target object', function() {
      expect(result).to.be.instanceof(MyObject);
    });
  });

  describe('#get', function() {
    it('should set the given property', function() {
      expect(obj.get('a', target)).to.equal('lorem');
      expect(obj.get('b', target)).to.equal('ipsum');
      expect(obj.get('c', target)).to.equal(1);
      expect(obj.get('d', target)).to.equal(2);
    });
  });

  describe('#set', function() {
    var result = obj.set('b', 'dolor', target);

    it('should set the given property', function() {
      expect(result).to.have.property('a', 'lorem');
      expect(result).to.have.property('b', 'dolor');
      expect(result).to.have.property('c', 1);
      expect(result).to.have.property('d', 2);
    });

    it('should not mutate the target object', function() {
      expect(target).to.have.property('a', 'lorem');
      expect(target).to.have.property('b', 'ipsum');
      expect(target).to.have.property('c', 1);
      expect(target).to.have.property('d', 2);
    });

    it('should preserve the prototype of the target object', function() {
      expect(result).to.be.instanceof(MyObject);
    });
  });

  describe('#apply', function() {
    it('should apply the function of the given property', function() {
      expect(obj.apply('e', 1, target)).to.equal(1);
    });
  });
});
