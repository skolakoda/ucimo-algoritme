// koliko godina je potrebno da bi naša štednja dostigla željenu sumu

function kolikoStednje(osnovica, kamata, cilj) {
  let iznos = osnovica
  let godina = 0
  while(iznos < cilj) {
    iznos += iznos * kamata / 100
    godina++
  }
  return godina
}

console.log(kolikoStednje(100, 20, 170))