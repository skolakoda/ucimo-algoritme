const matrica = [
  [1, 2, 12, 4],
  [3, 9, 11, 8],
  [7, 10, 2, 5],
  [1, 6, 14, 3]
]
const n = matrica.length
let suma = 0

for(let i = 0; i < n; i++)
  suma += matrica[i][n - i - 1]

console.log('Aritmetička sredina sporedne dijagonale je ' + suma / n)
