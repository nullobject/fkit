export default function findIndices (p, as) {
  const s = []
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { s.push(i) }
  }

  return s
}
