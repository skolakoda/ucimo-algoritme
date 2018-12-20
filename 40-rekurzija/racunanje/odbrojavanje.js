function odbrojavanje(n) {
  if (n === 0) return
  console.log(n)
  return odbrojavanje(n-1)
}

odbrojavanje(9)
