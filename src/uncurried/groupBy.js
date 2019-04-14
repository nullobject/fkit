import fold from './fold'
import get from './get'
import isFunction from '../internal/isFunction'

export default function groupBy (f, as) {
  const iteratee = a => isFunction(f) ? f(a) : get(f, a)
  return fold((memo, a) => {
    const key = iteratee(a);
    (memo[key] = memo[key] || []).push(a)
    return memo
  }, {}, as)
}
