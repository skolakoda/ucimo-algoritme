const transpose = a => a[0].map((x, i) => a.map(y => y[i]))
const dotproduct = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n)
const matrixMultiplication = (a, b) => a.map(x => transpose(b).map(y => dotproduct(x, y)))

/*
const matrixMultiplication = (a, b) => a.map(row =>
  row.map((_, i) =>
    row.reduce((sum, cell, j) =>
      sum + cell * b[j][i], 0)
  )
)
*/

console.log(matrixMultiplication([ [1, 2], [3, 2] ], [ [3, 2], [1, 1] ]))