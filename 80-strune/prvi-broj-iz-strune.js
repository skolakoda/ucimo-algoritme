function prviBroj(str) {
  for (let i in str) {
    if ((parseInt(str[i]) == str[i])) return str[i]
  }
}

console.log(prviBroj("a a_933"))