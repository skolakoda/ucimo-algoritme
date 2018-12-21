function upareneZagrade(zagrade) {
  let n = 0
  for (let i = 0; i < zagrade.length && n >= 0; i++)
    n = zagrade[i] == '(' ? n + 1 : n - 1
  return n == 0
}

console.log(upareneZagrade("()"))
console.log(upareneZagrade(")(()))"))
console.log(upareneZagrade("("))
console.log(upareneZagrade("(())((()())())"))
