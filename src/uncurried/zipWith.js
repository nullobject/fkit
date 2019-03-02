export default function zipWith (f, as, bs) {
  const n = Math.min(as.length, bs.length)
  return Array.from(as.slice(0, n)).map((a, i) => f(a, bs[i]))
}
