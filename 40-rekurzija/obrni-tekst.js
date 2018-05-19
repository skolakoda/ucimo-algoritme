function obrni(tekst) {
  duzina = tekst.length
  if (!duzina) return ''
  return tekst[duzina-1] + obrni(tekst.substring(0, duzina-1))
}

console.log(obrni('Ana voli Milovana'))
