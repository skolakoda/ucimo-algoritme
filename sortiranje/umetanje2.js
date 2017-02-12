const slucajniNiz = require('../utils/slucajniNiz')

const poredjajUmetanjem = izvorniNiz => {
  const niz = [...izvorniNiz]
  let pocniOd = 1
  while (pocniOd < niz.length) {
    let j = pocniOd
    let i = j - 1
    while(niz[j] < niz[i]) {
      [niz[i], niz[j]] = [niz[j], niz[i]]
      j--
      i--
    }
    pocniOd++
  }
  return niz
}

const niz = slucajniNiz(20)
console.log(niz)
const poredjanNiz = poredjajUmetanjem(niz)
console.log(poredjanNiz)
