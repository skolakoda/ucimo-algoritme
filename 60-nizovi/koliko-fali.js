// koliko brojeva fali da bi niz imao sve brojeve izmedju najmanjeg i najveceg

function kolikoFali(niz) {
  return Math.max(...niz) - Math.min(...niz) + 1 - niz.length
}


console.log(kolikoFali([6, 2, 3, 8]))