import fold from './fold'

export default function maximumBy (f, as) {
  return fold((a, b) => f(a, b) > 0 ? a : b, as[0], as)
}
