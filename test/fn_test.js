'use strict';

var fn = require('../src/fn');

describe('fn', function() {
  describe('#add', function() {
    it('should add the values', function() {
      expect(fn.add(2)(1)).to.equal(3);
    });
  });

  describe('#sub', function() {
    it('should subtract the values', function() {
      expect(fn.sub(2)(1)).to.equal(-1);
    });
  });

  describe('#mul', function() {
    it('should multiply the values', function() {
      expect(fn.mul(2)(1)).to.equal(2);
    });
  });

  describe('#div', function() {
    it('should divide the values', function() {
      expect(fn.div(2)(1)).to.equal(0.5);
    });
  });

  describe('#mod', function() {
    it('should modulo the values', function() {
      expect(fn.mod(2)(1)).to.equal(1);
    });
  });

  describe('#min', function() {
    it('should compare the values', function() {
      expect(fn.min(1)(2)).to.equal(1);
      expect(fn.min(2)(1)).to.equal(1);
      expect(fn.min(2)(2)).to.equal(2);
    });
  });

  describe('#max', function() {
    it('should compare the values', function() {
      expect(fn.max(1)(2)).to.equal(2);
      expect(fn.max(2)(1)).to.equal(2);
      expect(fn.max(2)(2)).to.equal(2);
    });
  });

  describe('#and', function() {
    it('should AND the values', function() {
      expect(fn.and(false)(false)).to.be.false;
      expect(fn.and(false)(true)).to.be.false;
      expect(fn.and(true)(false)).to.be.false;
      expect(fn.and(true)(true)).to.be.true;
    });
  });

  describe('#or', function() {
    it('should OR the values', function() {
      expect(fn.or(false)(false)).to.be.false;
      expect(fn.or(false)(true)).to.be.true;
      expect(fn.or(true)(false)).to.be.true;
      expect(fn.or(true)(true)).to.be.true;
    });
  });

  describe('#not', function() {
    it('should NOT the value', function() {
      expect(fn.not(false)).to.be.true;
      expect(fn.not(true)).to.be.false;
    });
  });

  describe('#negate', function() {
    it('should negate the value', function() {
      expect(fn.negate(1)).to.equal(-1);
      expect(fn.negate(-1)).to.equal(1);
    });
  });

  describe('#eql', function() {
    it('should compare the values', function() {
      var a = {}, b = {};

      expect(fn.eql(1)(2)).to.be.false;
      expect(fn.eql(2)(2)).to.be.true;

      expect(fn.eql('lorem')('ipsum')).to.be.false;
      expect(fn.eql('lorem')('lorem')).to.be.true;

      expect(fn.eql(a)(b)).to.be.false;
      expect(fn.eql(a)(a)).to.be.true;
    });
  });

  describe('#gt', function() {
    it('should compare the values', function() {
      expect(fn.gt(1)(2)).to.be.true;
      expect(fn.gt(2)(1)).to.be.false;
      expect(fn.gt(2)(2)).to.be.false;
    });
  });

  describe('#gte', function() {
    it('should compare the values', function() {
      expect(fn.gte(1)(2)).to.be.true;
      expect(fn.gte(2)(1)).to.be.false;
      expect(fn.gte(2)(2)).to.be.true;
    });
  });

  describe('#lt', function() {
    it('should compare the values', function() {
      expect(fn.lt(1)(2)).to.be.false;
      expect(fn.lt(2)(1)).to.be.true;
      expect(fn.lt(2)(2)).to.be.false;
    });
  });

  describe('#lte', function() {
    it('should compare the values', function() {
      expect(fn.lte(1)(2)).to.be.false;
      expect(fn.lte(2)(1)).to.be.true;
      expect(fn.lte(2)(2)).to.be.true;
    });
  });

  describe('#inc', function() {
    it('should increment the value', function() {
      expect(fn.inc(1)).to.equal(2);
      expect(fn.inc(2)).to.equal(3);
    });
  });

  describe('#dec', function() {
    it('should decrement the value', function() {
      expect(fn.dec(3)).to.equal(2);
      expect(fn.dec(2)).to.equal(1);
    });
  });

  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(fn.range(1)(3)).to.eql([1, 2, 3]);
      expect(fn.range(3)(1)).to.eql([3, 2, 1]);
      expect(fn.range(1)(1)).to.eql([1]);
    });
  });

  describe('#concatMap', function() {
    it('should concat map an array', function() {
      function f(a) { return [a + 1]; }
      expect(fn.concatMap(f)([1, 2, 3])).to.be.eql([2, 3, 4]);
    });

    it('should concat map a string', function() {
      function f(a) { return a + '-'; }
      expect(fn.concatMap(f)('foo')).to.be.eql('f-o-o-');
    });
  });

  describe('#map', function() {
    it('should map an array', function() {
      function f(a) { return [a + 1]; }
      expect(fn.map(f)([1, 2, 3])).to.be.eql([[2], [3], [4]]);
    });

    it('should map a string', function() {
      function f(a) { return a + '-'; }
      expect(fn.map(f)('foo')).to.be.equal('f-o-o-');
    });
  });

  describe('#filter', function() {
    it('should filter an array', function() {
      function f(a) { return a > 1; }
      expect(fn.filter(f)([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should filter a string', function() {
      function f(a) { return a == 'o'; }
      expect(fn.filter(f)('foo')).to.be.equal('oo');
    });
  });

  describe('#fold', function() {
    it('should fold an array from left to right', function() {
      function f(b, a) { return [a].concat(b); }
      expect(fn.fold(f)([])([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should fold a string from left to right', function() {
      function f(b, a) { return a + b; }
      expect(fn.fold(f)('')('foo')).to.be.equal('oof');
    });
  });

  describe('#foldRight', function() {
    it('should fold an array from right to left', function() {
      function f(a, b) { return [a].concat(b); }
      expect(fn.foldRight(f)([])([1, 2, 3])).to.be.eql([1, 2, 3]);
    });

    it('should fold a string from right to left', function() {
      function f(a, b) { return a + b; }
      expect(fn.foldRight(f)('')('foo')).to.be.equal('foo');
    });
  });

  describe('#scan', function() {
    it('should scan an array from left to right', function() {
      function f(b, a) { return [a].concat(b); }
      expect(fn.scan(f)([])([1, 2, 3])).to.be.eql([[], [1], [2,1], [3,2,1]]);
    });

    it('should scan a string from left to right', function() {
      function f(b, a) { return a + b; }
      expect(fn.scan(f)('')('foo')).to.be.eql(['', 'f', 'of', 'oof']);
    });
  });

  describe('#scanRight', function() {
    it('should scan an array from right to left', function() {
      function f(a, b) { return [a].concat(b); }
      expect(fn.scanRight(f)([])([1, 2, 3])).to.be.eql([[1,2,3], [2,3], [3], []]);
    });

    it('should scan an array from right to left', function() {
      function f(a, b) { return a + b; }
      expect(fn.scanRight(f)('')('foo')).to.be.eql(['foo', 'oo', 'o', '']);
    });
  });

  describe('#append', function() {
    it('should append an element to an array', function() {
      expect(fn.append([1, 2, 3])(4)).to.be.eql([1, 2, 3, 4]);
    });

    it('should append two strings', function() {
      expect(fn.append('foo')('bar')).to.be.equal('foobar');
    });
  });

  describe('#prepend', function() {
    it('should prepend an element to an array', function() {
      expect(fn.prepend([1, 2, 3])(4)).to.be.eql([4, 1, 2, 3]);
    });

    it('should prepend two strings', function() {
      expect(fn.prepend('foo')('bar')).to.be.equal('barfoo');
    });
  });

  describe('#concat', function() {
    it('should concatenate arrays', function() {
      expect(fn.concat([1, 2, 3], [4, 5, 6], [7, 8, 9])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should concatenate strings', function() {
      expect(fn.concat('foo', 'bar', 'baz')).to.be.equal('foobarbaz');
    });
  });

  describe('#head', function() {
    it('should return the first element of an array', function() {
      expect(fn.head([1, 2, 3])).to.be.equal(1);
    });

    it('should return the first character of a string', function() {
      expect(fn.head('foo')).to.be.equal('f');
    });
  });

  describe('#tail', function() {
    it('should return the elements after the first element of an array', function() {
      expect(fn.tail([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should return the characters after the first character of a string', function() {
      expect(fn.tail('foo')).to.be.equal('oo');
    });
  });

  describe('#init', function() {
    it('should return the elements before the last element of an array', function() {
      expect(fn.init([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should return the characters before the last character of a string', function() {
      expect(fn.init('foo')).to.be.equal('fo');
    });
  });

  describe('#last', function() {
    it('should return the last element of an array', function() {
      expect(fn.last([1, 2, 3])).to.be.equal(3);
    });

    it('should return the last character of a string', function() {
      expect(fn.last('foo')).to.be.equal('o');
    });
  });

  describe('#reverse', function() {
    it('should return the array reversed', function() {
      expect(fn.reverse([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should return the string reversed', function() {
      expect(fn.reverse('foo')).to.be.equal('oof')
    });
  });

  describe('#branch', function() {
    var p = sinon.stub().returns(true),
        f = sinon.spy(),
        g = sinon.spy(),
        a = {};

    it('should return f(a) if p(a) is true', function() {
      fn.branch(p.returns(true), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(f.calledWithExactly(a)).to.be.true;
    });

    it('should return g(a) if p(a) is false', function() {
      fn.branch(p.returns(false), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(g.calledWithExactly(a)).to.be.true;
    });
  });
});
