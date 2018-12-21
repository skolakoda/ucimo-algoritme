/**
 * Conway's Game of Life.
 * @author http://ankr.dk
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

  if (exists(x - 1, y - 1)) neighbours++
  if (exists(x, y - 1)) neighbours++
  if (exists(x + 1, y - 1)) neighbours++
  if (exists(x - 1, y)) neighbours++
  if (exists(x + 1, y)) neighbours++
  if (exists(x - 1, y + 1)) neighbours++
  if (exists(x, y + 1)) neighbours++
  if (exists(x + 1, y + 1)) neighbours++

  return neighbours
}

function update() {
  const newCells = []
  cells.forEach((row, x) => {
    newCells[x] = []
    row.forEach((cell, y) => {
      const neighbours = countNeighbours(x, y)
      const alive = neighbours === 3 || (cell && neighbours === 2) ? 1 : 0
      newCells[x][y] = alive
    })
  })
  cells = newCells
  draw()
  setTimeout(update, 70)
}

function init() {
  for (let i = 0; i < gridSize; i++) {
    cells[i] = []
    for (let j = 0; j < gridSize; j++) {
      cells[i][j] = Math.round(Math.random())
    }
  }
  update()
}

init()
