function samoParni(arr) {
  return arr.reduce((acc, x) => acc && x % 2 == 0, true)
}

console.log(samoParni([2, 4, 66, 4, 8, 2]))