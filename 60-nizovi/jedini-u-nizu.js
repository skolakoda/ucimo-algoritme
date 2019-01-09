/*
  xor ima sledeća svojstva:
  n ^ n = 0
  n ^ 0 = n
*/

const jedini_u_nizu = niz => niz.reduce((acc, n) => acc ^ n)

console.log(jedini_u_nizu ([3, 4, 3, 5, 5]))
