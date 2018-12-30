// nadji slovo koje nedostaje u nizu ili vrati undefined

function fearNotLetter(str) {
  let i = str[0].charCodeAt()
  for (const l of str) {
    if (l.charCodeAt() != i) 
      return String.fromCharCode(i)
    i++
  }
  return undefined
}

console.log(fearNotLetter("abcefg"))