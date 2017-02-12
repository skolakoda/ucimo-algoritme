let brojac = 0
const f = [0, 1]

// rekurzivno nalazi n-ti fibonacijev broj
const nadjiFibonaci = function(n) {
  brojac++
  if(n < 3) return 1
  return nadjiFibonaci(n - 1) + nadjiFibonaci(n - 2)
}

// iterativno nalazi n-ti fibonacijev broj
const nadjiFibonaci2 = function(n) {
  for(let i = 2; i <= n; i++) {
    brojac++
    f[i] = f[i-1] + f[i-2]
  }
  return f[n]
}

console.log(`Rekurzivno: broj ${nadjiFibonaci(40)} nadjen u ${brojac} operacije.`)
brojac = 0
console.log(`Iterativno: broj ${nadjiFibonaci2(40)} nadjen u ${brojac} operacije.`)
