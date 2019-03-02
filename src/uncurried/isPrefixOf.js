import empty from '../empty'
import head from '../head'
import tail from '../tail'

export default function isPrefixOf (as, bs) {
  if (empty(as)) {
    return true
  } else if (empty(bs)) {
    return false
  } else {
    return head(as) === head(bs) && isPrefixOf(tail(as), tail(bs))
  }
}
