import concat from '../concat'
import empty from '../empty'
import head from '../head'
import mempty from '../internal/mempty'
import tail from '../tail'

export default function intersperse (s, as) {
  const prependToAll = bs =>
    empty(bs)
      ? mempty(bs)
      : concat(s, head(bs), prependToAll(tail(bs)))

  return empty(as)
    ? mempty(as)
    : concat(head(as), prependToAll(tail(as)))
}
