'use strict';

var base   = require('./base'),
    build  = require('./build'),
    fn     = require('../fn'),
    fold   = require('./fold'),
    map    = require('./map'),
    search = require('./search');

var self;

/**
 * This module defines set operations on lists.
 *
 * @private
 * @module fkit/list/set
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns a list with all duplicate elements removed from the list of `as`.
   *
   * It is a special case of the `nubBy` function where the elements are
   * compared using the strict equality `===` operator.
   *
   * The resulting list will only contain unique elements.
   *
   * @summary Removes duplicate elements from a list.
   *
   * @example
   *   F.nub([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
   *   F.nub('abbccc'); // 'abc'
   *
   * @param as A list.
   * @returns A new list.
   */
  nub: function(as) {
    return self.nubBy(fn.equal, as);
  },

  /**
   * Returns a list with all duplicate elements that satisfy the comparator
   * function `f` removed from the list of `bs`.
   *
   * @summary Removes duplicate elements from a list using a comparator
   * function.
   *
   * @curried
   * @function
   * @param f A comparator function.
   * @param as A list.
   * @returns A new list.
   */
  nubBy: fn.curry(function nubBy(f, as) {
    var a = base.head(as);

    return base.empty(as) ?
      base.mempty(as) :
      base.prepend(
        a,
        nubBy(f, search.filter(function(b) { return !f(a, b); }, base.tail(as)))
      );
  }),

  /**
   * Returns a list that contains the union of elements in the lists of `as`
   * and `bs`.
   *
   * Duplicates are removed from `bs`, but if `as` contains duplicates then so
   * will the result.
   *
   * @summary Calculates the union of two lists.
   *
   * @example
   *   F.union([1, 2, 3], [2, 3, 4]); // [1, 2, 3, 4]
   *   F.union('hello', 'world'); // 'hellowrd'
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  union: fn.curry(function(as, bs) {
    return fold.fold(function(cs, b) {
      return (search.elem(b, cs)) ? cs : base.append(b, cs);
    }, as, bs);
  }),

  /**
   * Returns a list that contains the intersection of the elments in the lists
   * of `as` and `bs`.
   *
   * Duplicates are removed from `bs`, but if `as` contains duplicates then so
   * will the result.
   *
   * @summary Calculates the intersection of two lists.
   *
   * @example
   *   F.intersect([1, 2, 3], [2, 3, 4]); // [2, 3]
   *   F.intersect('hello', 'world'); // 'ol'
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  intersect: fn.curry(function(as, bs) {
    return fold.fold(function(cs, a) {
      return (search.elem(a, bs)) ? base.append(a, cs) : cs;
    }, base.mempty(as), as);
  }),

  /**
   * Returns a list that contains the difference of the elements in the lists
   * of `as` and `bs`.
   *
   * @summary Calculates the difference of two lists.
   *
   * @example
   *   F.difference([1, 2, 3], [2, 3, 4]); // [1]
   *   F.difference('hello', 'world'); // 'wrd'
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  difference: fn.curry(function(as, bs) {
    return fold.fold(fn.flip(self.remove), as, bs);
  }),

  /**
   * Returns a list with the first occurance of the element `a` removed from
   * the list of `bs`.
   *
   * It is a special case of the `removeBy` function where the elements are
   * compared using the strict equality `===` operator.
   *
   * @summary Removes the first occurance of an element from a list.
   *
   * @example
   *   F.remove(2, [1, 2, 3]); // [1, 3]
   *   F.remove('f', 'foo'); // 'oo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  remove: fn.curry(function(a, bs) {
    return self.removeBy(fn.equal, a, bs);
  }),

  /**
   * Returns a list with the first occurance of the element `a` that satisfies
   * the comparator function `f` removed from the list of `bs`.
   *
   * @summary Removes the first occurance of an element from a list using a
   * comparator function.
   *
   * @curried
   * @function
   * @param f A comparator function.
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  removeBy: fn.curry(function removeBy(f, a, bs_) {
    var b  = base.head(bs_),
        bs = base.tail(bs_);

    return base.empty(bs_) ?
      base.mempty(bs_) :
      f(a, b) ? bs : base.prepend(b, removeBy(f, a, bs));
  }),

  /**
   * Returns a list that contains all the ordered pairs `[a, b]` in the lists
   * of `as` and `bs`.
   *
   * @summary Calculates the cartesian product of two lists.
   *
   * @example
   *   F.cartesian([1, 2], [3, 4]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
   *   F.cartesian('ab', 'cd'); // [['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  cartesian: fn.curry(function cartesian(as, bs) {
    return base.empty(as) ?
      [] :
      fold.concat(
        map.map(build.pair(base.head(as)), bs),
        cartesian(base.tail(as), bs)
      );
  }),

  /**
   * Returns a list that contains all the subsequences of the elements in the
   * list of `as`.
   *
   * @summary Calculates the subsequences of a list.
   *
   * @example
   *   F.subsequences([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
   *   F.subsequences('abc'); // ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']
   *
   * @param as A list.
   * @returns A new list.
   */
  subsequences: function(as) {
    return base.prepend(base.mempty(as), subsequences_(as));

    function subsequences_(bs) {
      var b = base.head(bs);

      if (base.empty(bs)) {
        return [];
      } else {
        return base.prepend(base.pure(b), fold.foldRight(f, [], subsequences_(base.tail(bs))));
      }

      function f(ys, r) {
        return fold.concat(base.pure(ys), base.pure(base.prepend(b, ys)), r);
      }
    }
  },

  /**
   * Returns a list that contains all the permutations of the elements in the
   * list of `as`.
   *
   * @summary Calculates the permutations of a list.
   *
   * @example
   *   F.permutations([1, 2, 3]); // [[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]]
   *   F.permutations('abc'); // ['abc', 'bac', 'cba', 'bca', 'cab', 'acb']
   *
   * @param as A list.
   * @returns A new list.
   */
  permutations: function permutations(as) {
    return base.prepend(as, permutations_(as, []));

    function permutations_(bs_, cs) {
      var b  = base.head(bs_),
          bs = base.tail(bs_);

      return base.empty(bs_) ? [] :
        fold.foldRight(
          interleave,
          permutations_(bs, base.prepend(b, cs)),
          permutations(cs)
        );

      function interleave(ds, r) {
        return interleave_(fn.id, ds)[1];

        function interleave_(f, es_) {
          if (base.empty(es_)) {
            return [bs, r];
          } else {
            var e  = base.head(es_),
                es = base.tail(es_),
                s  = interleave_(fn.compose(f, base.prepend(e)), es);

            return [
              base.prepend(e, s[0]),
              base.prepend(f(fold.concat(b, e, s[0])), s[1])
            ];
          }
        }
      }
    }
  },
};
