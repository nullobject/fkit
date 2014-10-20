'use strict';

var obj = require('../src/obj');

function f() {}
var spy = sinon.spy(f);

function MyObject() {}
MyObject.prototype.constructor = MyObject;

function buildObject() {
  var o = new MyObject();

  o.a = 'lorem';
  o.b = 1;
  o.c = spy;

  return o;
}

describe('object', function() {
  var target = buildObject();

  describe('#applyMethod', function() {
    it('should apply a nullary function', function() {
      obj.applyMethod('c')()(target);
      expect(spy.calledWithExactly(undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      obj.applyMethod('c')(1)(target);
      expect(spy.calledWithExactly(1)).to.be.true;
    });
  });

  describe('#applyMethod2', function() {
    it('should apply a nullary function', function() {
      obj.applyMethod2('c')()()(target);
      expect(spy.calledWithExactly(undefined, undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      obj.applyMethod2('c')(1)(2)(target);
      expect(spy.calledWithExactly(1, 2)).to.be.true;
    });
  });

  describe('#applyMethod3', function() {
    it('should apply a nullary function', function() {
      obj.applyMethod3('c')()()()(target);
      expect(spy.calledWithExactly(undefined, undefined, undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      obj.applyMethod3('c')(1)(2)(3)(target);
      expect(spy.calledWithExactly(1, 2, 3)).to.be.true;
    });
  });

  describe('#copy', function() {
    var result = obj.copy(target, {b: 0});

    it('should copy the properties of the given objects', function() {
      expect(result).to.eql({a: 'lorem', b: 0, c: spy});
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
      expect(obj.get('a')(target)).to.eql('lorem');
      expect(obj.get('b')(target)).to.eql(1);
      expect(obj.get('c')(target)).to.eql(spy);
    });
  });

  describe('#set', function() {
    it('should set the given property', function() {
      var result = obj.set('a')('dolor')(target);
      expect(result).to.eql({a: 'dolor', b: 1, c: spy});
    });
  });

  describe('#update', function() {
    it('should update the given property', function() {
      var result = obj.update('b')(function(a) { return a + 1; })(target);
      expect(result).to.eql({a: 'lorem', b: 2, c: spy});
    });
  });

  describe('#pick', function() {
    it('should copy the given object with the properties', function() {
      var result = obj.pick(['a', 'b'])(target);
      expect(result).to.eql({a: 'lorem', b: 1});
    });
  });

  describe('#omit', function() {
    it('should copy the given object without the properties', function() {
      var result = obj.omit(['a', 'b'])(target);
      expect(result).to.eql({c: spy});
    });
  });

  describe('#pairs', function() {
    it('should return the key-value pairs of the given object', function() {
      var result = obj.pairs(target);
      expect(result).to.eql([['a', 'lorem'], ['b', 1], ['c', spy]]);
    });
  });

  describe('#keys', function() {
    it('should return the keys of the given object', function() {
      var result = obj.keys(target);
      expect(result).to.eql(['a', 'b', 'c']);
    });
  });

  describe('#values', function() {
    it('should return the values of the given object', function() {
      var result = obj.values(target);
      expect(result).to.eql(['lorem', 1, spy]);
    });
  });
});
