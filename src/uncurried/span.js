import dropWhile from './dropWhile'
import takeWhile from './takeWhile'

export default function span (p, as) {
  return [takeWhile(p, as), dropWhile(p, as)]
}
