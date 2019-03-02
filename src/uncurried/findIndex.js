export default function findIndex (p, as) {
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { return i }
  }

  return undefined
}
