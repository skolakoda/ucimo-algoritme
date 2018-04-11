const slucajniNiz = require('../utils/slucajniNiz')

// compare the arrays item by item and return the concatenated result
function spoji(levo, desno) {
  const result = []
  let leviIndex = 0
  let desniIndex = 0
  while (leviIndex < levo.length && desniIndex < desno.length) {
    if (levo[leviIndex] < desno[desniIndex]) {
      result.push(levo[leviIndex])
      leviIndex++
    } else {
      result.push(desno[desniIndex])
      desniIndex++
    }
  }
  return result.concat(levo.slice(leviIndex)).concat(desno.slice(desniIndex))
}

// Split the array into halves and spoji them recursively
function redajSpajanjem(niz) {
  if (niz.length === 1) {
    return niz // return once we hit an array with a single item
  }

  const sredina = Math.floor(niz.length / 2) // get the sredina item of the array rounded down
  const levo = niz.slice(0, sredina) // items on the levo side
  const desno = niz.slice(sredina) // items on the desno side

  return spoji(
    redajSpajanjem(levo),
    redajSpajanjem(desno)
  )
}

const lista = slucajniNiz()
console.log(lista)
console.log(redajSpajanjem(lista))
