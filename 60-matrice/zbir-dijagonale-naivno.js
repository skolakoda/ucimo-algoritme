const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function zbirDijagonale(matrica) {
  let zbir = 0
  for (let i = 0; i < matrica.length; i++) {
    for (let j = 0; j < matrica[i].length; j++) {
      if (i == j) zbir += matrica[i][j]
    }
  }
  return zbir
}

console.log(zbirDijagonale(matrica))
