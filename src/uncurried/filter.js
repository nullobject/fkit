import always from '../always'
import branch from '../branch'
import id from '../id'
import isString from '../internal/isString'
import concatMap from './concatMap'

export default function filter (p, as) {
  const f = branch(p, id, always(''))
  return isString(as) ? concatMap(f, as) : as.filter(p)
}
