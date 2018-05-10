// bez privremene varijable
function nadjiNajmanji(niz) {
  for (let i = 0; i < niz.length-1; i++)
    if (niz[i] < niz[i+1])
      [niz[i], niz[i+1]] = [niz[i+1], niz[i]]
  return niz[niz.length-1]
}

console.log(nadjiNajmanji([54,26,93,17,77,31,44,55,20]))
