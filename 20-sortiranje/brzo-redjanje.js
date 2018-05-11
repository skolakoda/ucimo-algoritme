const slucajniNiz = require('../utils/slucajniNiz')

function brzoRedjaj(niz) {
  if (niz.length <= 1) return niz

  const levo = []
  const desno = []
  const pivot = niz.pop()

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] <= pivot) {
      levo.push(niz[i])
    } else {
      desno.push(niz[i])
    }
  }
  return [...brzoRedjaj(levo), pivot, ...brzoRedjaj(desno)]
}

console.log(brzoRedjaj(slucajniNiz(20)))
