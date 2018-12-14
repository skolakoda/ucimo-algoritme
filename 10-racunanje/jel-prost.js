const broj = process.argv[2] ? Number(process.argv[2]) : 35

function jelProst(broj) {
  if (broj < 2) return false
  if (broj == 2) return true
  if (broj % 2 == 0) return false
  for (let i = 3; i * i <= broj; i += 2)
    if (broj % i == 0) return false
  return true
}

console.log(jelProst(broj))
