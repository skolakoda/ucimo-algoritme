function nzd(x, y) {
  while (y != 0)
    [x, y] = [y, x % y]
  return x
}

console.log(nzd(48, 18))
