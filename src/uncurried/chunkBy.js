import empty from '../empty'
import head from '../head'
import last from '../last'
import span from '../span'
import tail from '../tail'
import prepend from './prepend'

export default function chunkBy (c, as) {
  const b = head(as)
  const bs = span(a => c(a, b), tail(as))

  return empty(as)
    ? []
    : prepend(
      prepend(b, head(bs)),
      chunkBy(c, last(bs))
    )
}
