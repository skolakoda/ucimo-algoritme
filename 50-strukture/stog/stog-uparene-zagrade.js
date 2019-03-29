function jelUpareno(znaci) {
  stog = []
  for (znak of znaci) {
    if (znak == '(')
      stog.push(znak)
    if (znak == ')') {
      if (!stog.length) return false
      stog.pop()
    }
  }
  return !stog.length
}

console.log(jelUpareno('(((a + b))(b + a)(()))'))
console.log(jelUpareno('())('))
