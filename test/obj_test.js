'use strict';

var obj = require('../src/obj');

function MyObject() {}
MyObject.prototype.constructor = MyObject;

function buildObject() {
  var o = new MyObject();

  o.a = 'lorem';
  o.b = 'ipsum';
  o.c = 1;

  return o;
}

describe('object', function() {
  var target = buildObject();

  describe('#copy', function() {
    var result = obj.copy(target, {b: 'dolor'}, {c: 0});

    it('should copy the properties of the given objects', function() {
      expect(result).to.eql({a: 'lorem', b: 'dolor', c: 0});
    });

    it('should not mutate the target object', function() {
      expect(target).to.eql(target);
    });

    it('should preserve the prototype of the target object', function() {
      expect(result).to.be.instanceof(MyObject);
    });
  });

  describe('#get', function() {
    it('should get the given property', function() {
      expect(obj.get('a', target)).to.equal('lorem');
      expect(obj.get('b', target)).to.equal('ipsum');
      expect(obj.get('c', target)).to.equal(1);
    });
  });

  describe('#set', function() {
    var result = obj.set('b', 'dolor', target);

    it('should set the given property', function() {
      expect(result).to.eql({a: 'lorem', b: 'dolor', c: 1});
    });

    it('should not mutate the target object', function() {
      expect(target).to.eql(target);
    });

    it('should preserve the prototype of the target object', function() {
      expect(result).to.be.instanceof(MyObject);
    });
  });

  describe('#pick', function() {
    it('should get the given properties', function() {
      var result = obj.pick(target, 'a', 'b');
      expect(result).to.eql({a: 'lorem', b: 'ipsum'});
    });
  });

  describe('#pairs', function() {
    it('should return the key value pairs', function() {
      var result = obj.pairs(target);
      expect(result).to.eql([['a', 'lorem'], ['b', 'ipsum'], ['c', 1]]);
    });
  });
});
