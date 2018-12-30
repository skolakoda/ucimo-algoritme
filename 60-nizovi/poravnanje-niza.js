function poravnaj(niz) {
  const nadovezan = [].concat(...niz)
  return nadovezan.some(Array.isArray) ? poravnaj(nadovezan) : nadovezan
}

console.log(poravnaj([1, [2, 3, 4], [5, [[6]]]]))
