const zameniMesta = (niz, i, j) => [niz[i], niz[j]] = [niz[j], niz[i]]

const indeksNajmanjeg = function(niz, startIndex) {
  let min = niz[startIndex]
  let index = startIndex
  for (let i = startIndex + 1; i < niz.length; i++) {
    if (niz[i] < min) {
      index = i
      min = niz[i]
    }
  }
  return index
}

const poredjajBiranjem = function(niz) {
  let temp
  for (let i = 0; i < niz.length; i++) {
    temp = indeksNajmanjeg(niz, i)
    zameniMesta(niz, i, temp)
  }
}

const niz = [22, 11, 99, 88, 9, 7, 42]
poredjajBiranjem(niz)
console.log('Array after sorting: ' + niz)

const niz2 = [101, 22, 11, 99, 88, 9, 7, 42]
poredjajBiranjem(niz2)
console.log('Array after sorting: ' + niz2)
