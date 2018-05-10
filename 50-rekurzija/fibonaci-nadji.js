let brojac = 0

function nadjiFibonaci(n) {
  const niz = [0, 1]
  for(let i = 2; i <= n; i++) {
    brojac++
    niz.push(niz[i-1] + niz[i-2])
  }
  return niz[n]
}

function nadjiRekurzivno(n) {
  brojac++
  if (n < 3) return 1
  return nadjiRekurzivno(n-1) + nadjiRekurzivno(n-2)
}

console.log(`Iterativno: broj ${nadjiFibonaci(40)} nadjen u ${brojac} operacije.`)
brojac = 0
console.log(`Rekurzivno: broj ${nadjiRekurzivno(40)} nadjen u ${brojac} operacije.`)
