import toList from '../internal/toList'

export default function sortBy (c, as) {
  const bs = Array.from(as.slice(0))
  return toList(bs.sort(c), typeof as)
}
