import filter from './filter'

export default function any (p, as) {
  return filter(p, as).length > 0
}
