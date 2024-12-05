function najduzaUzastopnaSekvenca(arr) {
  if (arr.length === 0) return 0

  let maxDuzinaSekvence = 1 
  let trenutnaDuzinaSekvence = 1 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      trenutnaDuzinaSekvence++
    } else {
      maxDuzinaSekvence = Math.max(maxDuzinaSekvence, trenutnaDuzinaSekvence)
      trenutnaDuzinaSekvence = 1
    }
  }

  return Math.max(maxDuzinaSekvence, trenutnaDuzinaSekvence)
}

const brojevi = [1, 2, 3, 5, 6, 7, 8, 10]
console.log(najduzaUzastopnaSekvenca(brojevi))
