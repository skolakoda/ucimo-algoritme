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
let cells = []

function draw() {
  canvas.clearRect(0, 0, cWidth, cHeight)
  cells.forEach((row, x) => {
    row.forEach((cell, y) => {
      canvas.beginPath()
      canvas.rect(x * ceilSize, y * ceilSize, ceilSize, ceilSize)
      canvas[cell ? 'fill' : 'stroke']()
    })
  })
}

function countNeighbours(x, y) {
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

function update() {
  cells = cells.map((row, x) => row.map((cell, y) => {
    const neighbours = countNeighbours(x, y)
    return neighbours === 3 || (cell && neighbours === 2)
  }))
  draw()
  setTimeout(update, 70)
}

function init() {
  for (let i = 0; i < gridSize; i++) {
    cells[i] = []
    for (let j = 0; j < gridSize; j++) {
      cells[i][j] = Math.random() >= 0.8
    }
  }
  update()
}

init()
