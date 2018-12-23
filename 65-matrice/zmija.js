/*
  https://www.codewars.com/kata/snail/
  Prebaciti elemente matrice u niz, obilazeci matricu u smeru kazaljke
*/

function zmija(matrica) {
  const niz = []
  while (matrica.length) {
    niz.push(...matrica.shift())
    matrica.map(red => niz.push(red.pop()))
    matrica.reverse().map(red => red.reverse())
  }
  return niz
}

matrica = [
  [1,  2,  3,  4,  5,  6],
  [20, 21, 22, 23, 24, 7], 
  [19, 32, 33, 34, 25, 8], 
  [18, 31, 36, 35, 26, 9], 
  [17, 30, 29, 28, 27, 10], 
  [16, 15, 14, 13, 12, 11]
]
console.log(zmija(matrica))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]