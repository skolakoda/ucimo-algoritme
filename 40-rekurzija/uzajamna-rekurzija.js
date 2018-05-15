function jelParan(n) {
  if (n==0) return true
  return jelNeparan(n-1)
}

function jelNeparan(n) {
  if (n==0) return false
  return jelParan(n-1)
}

console.log(jelParan(5))
