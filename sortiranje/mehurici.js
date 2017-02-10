const niz  = [4, 54, 3, 2, 6, 6, 345, 5]
console.log(niz)
let promenjeno = false

do {
  promenjeno = false
  for (let i = niz.length - 1; i >= 0; i--) {
    let j = i - 1
    if (niz[i] < niz[j]) {
      [niz[i], niz[j]] = [niz[j], niz[i]]
      promenjeno = true
    }
  }
} while (promenjeno);

console.log(niz)
