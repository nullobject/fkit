import concat from '../concat'
import empty from '../empty'
import head from '../head'
import pair from '../pair'
import tail from '../tail'
import map from './map'

export default function cartesian (as, bs) {
  return empty(as)
    ? []
    : concat(
      map(pair(head(as)), bs),
      cartesian(tail(as), bs)
    )
}
