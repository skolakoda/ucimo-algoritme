let manji = 0
let veci = 1
const limit = process.argv[2] ? Number(process.argv[2]) : 50

console.log(manji)

while (veci < limit) {
  console.log(veci)
  const temp = veci
  veci += manji
  manji = temp
}
