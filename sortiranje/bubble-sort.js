const zameni = (niz, i, j) => [niz[i], niz[j]] = [niz[j], niz[i]]

const bubbleSort = niz => {
  let zamenio = false
    do {
    zamenio = false
    for (let i = 0; i < niz.length - 1; ++i) {
      if (niz[i] > niz[i + 1]) {
        zameni(niz, i, i + 1)
        zamenio = true
      }
    }
  } while (zamenio)
}

const niz = [5, 4, 3, 2, 1]

console.log(niz)
bubbleSort(niz)
console.log(niz)
