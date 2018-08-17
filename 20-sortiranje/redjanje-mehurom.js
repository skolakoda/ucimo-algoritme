const slucajniNiz = require('../utils/slucajniNiz')

function redjajMehurom(niz) {
  let nesredjen = true
  while (nesredjen) {
    nesredjen = false
    for (let x = 0; x < niz.length - 1; x++) {
      if (niz[x] > niz[x+1]) {
        [niz[x], niz[x+1]] = [niz[x+1], niz[x]]
        nesredjen = true
      }
    }
  }
  return niz
}

const niz = slucajniNiz(20)
console.log(niz)

const poredjanNiz = redjajMehurom(niz)
console.log(poredjanNiz)
