const niz = []
for (let i = 1; i <= 16; i++) niz.push(i)
const trazeniBroj = 15

let min = 0
let max = niz.length - 1
let pokusaj = 1

while (max >= min) {
  const srednji = Math.floor((max + min) / 2)
  if(niz[srednji] == trazeniBroj) {
    console.log(`Našao broj ${trazeniBroj} iz ${pokusaj}. pokušaja.`)
    break
  }
  if (niz[srednji] < trazeniBroj) min = srednji + 1
  else max = srednji - 1
  pokusaj++
}
