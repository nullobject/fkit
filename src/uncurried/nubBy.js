import empty from '../empty'
import head from '../head'
import mempty from '../internal/mempty'
import tail from '../tail'
import filter from './filter'
import prepend from './prepend'

export default function nubBy (f, as) {
  const a = head(as)

  return empty(as)
    ? mempty(as)
    : prepend(
      a,
      nubBy(f, filter(b => !f(a, b), tail(as)))
    )
}
