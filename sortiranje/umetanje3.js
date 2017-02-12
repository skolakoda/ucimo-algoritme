const slucajniNiz = require('../utils/slucajniNiz')
const niz = slucajniNiz(20)
console.log(niz)

const poredjaj = (ulazniNiz) => {
  const niz = [...ulazniNiz]
  for(let i = 1; i < niz.length; i++)
    for(let j = i; j > 0 && niz[j-1] > niz[j]; j--) {
      [niz[j], niz[j-1]] = [niz[j-1], niz[j]]
    }
  return niz
}

const poredjanNiz = poredjaj(niz)
console.log(poredjanNiz)
