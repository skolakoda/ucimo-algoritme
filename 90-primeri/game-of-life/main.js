const ctx = document.getElementById('c').getContext('2d')
ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
const ceilSize = 8
const gridSize = ceilSize * ceilSize // 64
const cWidth = ceilSize * gridSize // 512
const cHeight = ceilSize * gridSize // 512

function draw(matrix) {
  ctx.clearRect(0, 0, cWidth, cHeight)
  matrix.forEach((row, x) => row.forEach((cell, y) => {
    ctx.beginPath()
    ctx.rect(x * ceilSize, y * ceilSize, ceilSize, ceilSize)
    if (cell) ctx.fill()
  }))
}

function countNeighbours(x, y, matrix) {
  let neighbours = 0
  for (let h = -1; h <= +1; h++) {
    for (let v = -1; v <= +1; v++) {
      if (h == 0 && v == 0) continue
      if (matrix[x + h] && matrix[x + h][y + v]) neighbours++
    }
  }
  return neighbours
}

function updateMatrix(matrix) {
  return matrix.map((row, x) => row.map((cell, y) => {
    const neighbours = countNeighbours(x, y, matrix)
    return neighbours === 3 || (cell && neighbours === 2)
  }))
}

function update(matrix) {
  const newMatrix = updateMatrix(matrix)
  draw(newMatrix)
  setTimeout(() => update(newMatrix), 70)
}

function init() {
  const matrix = Array(gridSize).fill().map(() =>
    Array(gridSize).fill().map(() => Math.random() >= 0.8)
  )
  update(matrix)
}

init()
