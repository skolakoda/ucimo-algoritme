const slucajniNiz = require('../utils/slucajniNiz')

const poredjajBiranjem = ulazniNiz => {
  const niz = [...ulazniNiz]
  let pocetniIndex = 0
  let najmanjiIndex = 0
  while (pocetniIndex < niz.length) {
    for (let i = pocetniIndex; i < niz.length; i++) {
      if (niz[i] <= niz[najmanjiIndex]) najmanjiIndex = i
    }
    [niz[pocetniIndex], niz[najmanjiIndex]] = [niz[najmanjiIndex], niz[pocetniIndex]]
    pocetniIndex++
  }
  return niz
}

const niz = slucajniNiz(20)
console.log(niz)
const poredjanNiz = poredjajBiranjem(niz)
console.log(poredjanNiz)
