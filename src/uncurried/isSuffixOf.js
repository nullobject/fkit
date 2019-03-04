import isPrefixOf from './isPrefixOf'
import reverse from '../reverse'

export default function isSuffixOf (as, bs) {
  return isPrefixOf(reverse(as), reverse(bs))
}
