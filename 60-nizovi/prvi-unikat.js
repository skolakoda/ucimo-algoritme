// vrati prvi unikatni znak ili _

function prviUnikatniZnak(s) {
  for (let i = 0; i < s.length; i++) {
    let j
    for (j = 0; j < s.length; j++) {
      if (j == i) continue
      if (s[j] == s[i]) break
    }
    if (j == s.length) return s[i]
  }
  return '_'
}

console.log(prviUnikatniZnak("abacabad"))