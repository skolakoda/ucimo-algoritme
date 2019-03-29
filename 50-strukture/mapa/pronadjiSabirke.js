/* 
  https://www.codewars.com/kata/sum-of-pairs
  Given a list of integers and a sum, 
  return the first two values that add up to form the sum.
  (pomocu mape izbegavamo petlju u petlji)
*/

function pronadjiSabirke(brojevi, zbir) {
  const postoji = {}
  for (const n of brojevi) {
    if (postoji[zbir - n]) return [zbir - n, n]
    postoji[n] = true
  }
}

console.log(pronadjiSabirke([1, 2, 3, 4, 1, 0], 2))
console.log(pronadjiSabirke([10, 5, 2, 3, 7, 5], 10))
