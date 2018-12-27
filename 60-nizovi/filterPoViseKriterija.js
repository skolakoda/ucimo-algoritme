function filterPoViseKriterija(niz, kriteriji) {
  return niz.filter(obj => {
    let prolazi = true
    for (const kljuc in kriteriji) {
      prolazi = prolazi && kriteriji[kljuc] == obj[kljuc]
    }
    return prolazi
  })
}

console.log(filterPoViseKriterija(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
))

console.log(filterPoViseKriterija(
  [
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  { "apple": 1, "bat": 2 }
))
