const niz = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]
const broj = 73

let min = 0
let max = niz.length - 1
let koraka = 0

while (max >= min) {
  const i = Math.floor((min + max) / 2)
  console.log('pokusavam', niz[i])
  koraka++
  if (niz[i] == broj) {
    console.log('Broj je pronadjen u', koraka, 'koraka')
    break
  }
  if (niz[i] < broj)
    min = i + 1
  else
    max = i - 1
}