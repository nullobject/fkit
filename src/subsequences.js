import concat from './concat'
import empty from './empty'
import foldRight from './foldRight'
import head from './head'
import mempty from './internal/mempty'
import prepend from './prepend'
import pure from './internal/pure'
import tail from './tail'

/**
 * Returns a list that contains all the subsequences of the elements in the
 * list of `as`.
 *
 * @summary Calculates the subsequences of a list.
 *
 * @example
 *
 * F.subsequences([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 * F.subsequences('abc') // ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']
 *
 * @param as A list.
 * @returns A new list.
 */
export default function subsequences (as) {
  const subsequences_ = bs => {
    const b = head(bs)
    const f = (ys, r) => concat(pure(ys), pure(prepend(b, ys)), r)

    if (empty(bs)) {
      return []
    } else {
      return prepend(pure(b), foldRight(f, [], subsequences_(tail(bs))))
    }
  }

  return prepend(mempty(as), subsequences_(as))
}
