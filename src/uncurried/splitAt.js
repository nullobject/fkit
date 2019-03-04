import drop from './drop'
import take from './take'

export default function splitAt (n, as) {
  return [take(n, as), drop(n, as)]
}
