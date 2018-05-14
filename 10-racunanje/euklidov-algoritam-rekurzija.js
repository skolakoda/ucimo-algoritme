function nzd(a, b) {
  if (a == 0) return b
  return nzd(b % a, a)
}

console.log(nzd(48, 18))
