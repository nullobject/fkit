'use strict';

var obj = require('../src/obj');

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
  var target = buildObject();

  describe('#copy', function() {
    var result = obj.copy(target, {b: 'dolor'}, {c: 0});

    it('should copy the properties of the given objects', function() {
      expect(result).to.eql({a: 'lorem', b: 'dolor', c: 0, d: 2});
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
      expect(obj.get('d', target)).to.equal(2);
    });
  });

  describe('#set', function() {
    var result = obj.set('b', 'dolor', target);

    it('should set the given property', function() {
      expect(result).to.eql({a: 'lorem', b: 'dolor', c: 1, d: 2});
    });

    it('should not mutate the target object', function() {
      expect(target).to.eql(target);
    });

    it('should preserve the prototype of the target object', function() {
      expect(result).to.be.instanceof(MyObject);
    });
  });

  describe('#pluck', function() {
    it('should get the given properties', function() {
      var result = obj.pluck(target, 'a', 'b');
      expect(result).to.eql({a: 'lorem', b: 'ipsum'});
    });
  });
});
