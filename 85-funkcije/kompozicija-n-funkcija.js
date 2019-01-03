// https://www.codewars.com/kata/compose-functions-t-combinator/
/*
  Napravi funkciju compose koja uzima jedan broj i n funkcija
  i obavlja niz transformacija na broju na osnovu njih
*/

const udvostruci = x => x * 2
const dodajJedan = x => x + 1

const compose = (x, ...arr) => arr.reduce((total, fn) => fn(total), x)

console.log(compose(5, udvostruci)) // 10
console.log(compose(5, udvostruci, dodajJedan)) // 11
