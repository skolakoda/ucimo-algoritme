const nadjiNajveci = niz => {
  let najveci = niz[0]
  for(let i = 1; i < niz.length; i++) {
    if(najveci < niz[i]) {
      najveci = niz[i]
    }
  }
  return najveci
}

const brojevi = [1, 5, 2, 5, 33, 44, 77, 6, 7, 8, 9, 0, 2, 55, 66]
console.log(nadjiNajveci(brojevi))
