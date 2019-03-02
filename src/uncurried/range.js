import array from '../array'
export default function range (a, n) {
  return array(n).map((_, i) => a + i)
}
