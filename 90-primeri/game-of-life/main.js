/**
 * Conway's Game of Life
 * http://jsfiddle.net/ankr/tgjLA/
 */
const canvas = document.getElementById('c').getContext('2d')
canvas.strokeStyle = '#e1e1e1'
canvas.fillStyle = 'cadetblue'
const ceilSize = 8
const gridSize = ceilSize * ceilSize // 64
const cWidth = ceilSize * gridSize // 512
const cHeight = ceilSize * gridSize // 512

function draw(cells) {
  canvas.clearRect(0, 0, cWidth, cHeight)
  cells.forEach((row, x) => {
    row.forEach((cell, y) => {
      canvas.beginPath()
      canvas.rect(x * ceilSize, y * ceilSize, ceilSize, ceilSize)
      canvas[cell ? 'fill' : 'stroke']()
    })
  })
}

function countNeighbours(x, y, cells) {
  let neighbours = 0
  const exists = (x, y) => cells[x] && cells[x][y]
  for (let h = -1; h <= +1; h++) {
    for (let v = -1; v <= +1; v++) {
      if (h == 0 && v == 0) continue
      if (exists(x + h, y + v)) neighbours++
    }
  }
  return neighbours
}

function nextGeneration(cells) {
  return cells.map((row, x) => row.map((cell, y) => {
    const neighbours = countNeighbours(x, y, cells)
    return neighbours === 3 || (cell && neighbours === 2)
  }))
}

function update(cells) {
  const newCells = nextGeneration(cells)
  draw(newCells)
  setTimeout(() => update(newCells), 70)
}

function init() {
  const cells = []
  for (let i = 0; i < gridSize; i++) {
    cells[i] = []
    for (let j = 0; j < gridSize; j++) {
      cells[i][j] = Math.random() >= 0.8
    }
  }
  update(cells)
}

init()
