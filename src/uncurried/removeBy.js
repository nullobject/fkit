import empty from '../empty'
import head from '../head'
import mempty from '../internal/mempty'
import tail from '../tail'
import prepend from './prepend'

export default function removeBy (f, a, bs_) {
  const b = head(bs_)
  const bs = tail(bs_)

  return empty(bs_)
    ? mempty(bs_)
    : f(a, b) ? bs : prepend(b, removeBy(f, a, bs))
}
