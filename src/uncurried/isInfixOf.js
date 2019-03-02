import any from './any'
import isPrefixOf from '../isPrefixOf'
import tails from '../tails'

export default function isInfixOf (as, bs) {
  return any(isPrefixOf(as), tails(bs))
}
