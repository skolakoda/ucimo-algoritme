const poravnaj = (...argumenti) => argumenti.reduce((niz, el) =>
  niz.concat(Array.isArray(el) ? poravnaj(...el) : el)
, [])

console.log(poravnaj(1, [2, 3], 4, 5, [6, [7]])) // [1, 2, 3, 4, 5, 6, 7]
console.log(poravnaj('a', ['b', 2], 3, null, [[4], ['c']])) // ['a', 'b', 2, 3, null, 4, 'c']
