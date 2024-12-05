function najduzaUzastopnaSekvenca(arr) {
  if (arr.length === 0) return 0

  let maxDuzinaSekvence = 1 
  let trenutnaDuzina = 1 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      trenutnaDuzina++
    } else {
      maxDuzinaSekvence = Math.max(maxDuzinaSekvence, trenutnaDuzina)
      trenutnaDuzina = 1
    }
  }

  return Math.max(maxDuzinaSekvence, trenutnaDuzina)
}

const brojevi = [1, 2, 3, 5, 6, 7, 8, 10]
console.log(najduzaUzastopnaSekvenca(brojevi))
