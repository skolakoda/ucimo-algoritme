const slucajniNiz = require('../utils/slucajniNiz')

const poredjajUmetanjem = izvorniNiz => {
  const niz = [...izvorniNiz]
  let pocniOd = 1
  while (pocniOd < niz.length) {
    let j = pocniOd
    while(niz[j] < niz[j - 1]) {
      [niz[j - 1], niz[j]] = [niz[j], niz[j - 1]]
      j--
    }
    pocniOd++
  }
  return niz
}

const niz = slucajniNiz(20)
console.log(niz)
const poredjanNiz = poredjajUmetanjem(niz)
console.log(poredjanNiz)
