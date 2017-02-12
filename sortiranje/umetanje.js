const slucajniNiz = require('../utils/slucajniNiz')

const poredjajUmetanjem = niz => {
  let pocniOd = 1
  while (pocniOd < niz.length) {
    for (let i = 0; i < pocniOd; i++) {
      const nesvrstan = niz[pocniOd]
      if (nesvrstan < niz[i]) {
        niz.splice(pocniOd, 1)  // vadi nesvrstanog
        niz.splice(i, 0, nesvrstan) // umece nesvrstanog
      }
    }
    pocniOd ++
  }
  return niz
}

const niz = slucajniNiz(20)
console.log(niz)
const poredjanNiz = poredjajUmetanjem(niz)
console.log(poredjanNiz)
