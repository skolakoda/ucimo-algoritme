function fibonaci(n) {
  if (n == 0) return [0]
  if (n == 1) return [0, 1]
  const niz = fibonaci(n - 1)
  return [...niz, niz[n-1] + niz[n-2]]
}

console.log(fibonaci(15))
