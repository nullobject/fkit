'use strict';

var obj = require('../src/object');

function MyObject() {}
MyObject.prototype.constructor = MyObject;

function buildObject() {
  var o = new MyObject();

  o.a = 'lorem';
  o.b = 'ipsum';
  o.c = 1;
  o.d = 2;

  return o;
}

describe('object', function() {
  describe('#copy', function() {
    var target = buildObject(),
        result = obj.copy(target, {b: 'dolor'}, {c: 0});

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
    var target = buildObject();

    it('should set the given property', function() {
      expect(obj.get('a', target)).to.have.equal('lorem');
      expect(obj.get('b', target)).to.have.equal('ipsum');
      expect(obj.get('c', target)).to.have.equal(1);
      expect(obj.get('d', target)).to.have.equal(2);
    });
  });

  describe('#set', function() {
    var target = buildObject(),
        result = obj.set('dolor', 'b', target);

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
});
