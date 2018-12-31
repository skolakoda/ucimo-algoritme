const najveci = niz => {
  if (niz.length == 1) return niz[0]
  const [glava, ...rep] = niz
  return Math.max(glava, najveci(rep))
}

console.log(najveci([3, 4, 5, 2, 43, 3, 2]))