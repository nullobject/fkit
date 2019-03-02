import shuffle from '../shuffle'
import take from './take'

export default function sample (n, as) {
  return take(n, shuffle(as))
}
