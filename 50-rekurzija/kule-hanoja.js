function kule(n, polazna, dolazna, pomocna) {
  if (n == 0) return
  kule(n - 1, polazna, pomocna, dolazna)
  console.log(`Prebaci disk sa kule ${polazna} na kulu ${dolazna}\n`)
  kule(n - 1, pomocna, dolazna, polazna)
}

kule(3, 'A', 'C', 'B')
