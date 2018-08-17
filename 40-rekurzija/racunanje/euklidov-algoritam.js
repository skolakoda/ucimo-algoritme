function nzd(x, y) {
  if (x == 0) return y
  return nzd(y % x, x)
}

console.log(nzd(48, 18))
