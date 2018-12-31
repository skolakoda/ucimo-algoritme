function faktorijel(n) {
  let total = 1
  for (let i = 1; i <= n; i++) {
    total *= i
  }
  return total
}

console.log(faktorijel(5))
