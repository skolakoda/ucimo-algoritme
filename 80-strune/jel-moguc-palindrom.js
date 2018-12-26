// palindrom je moguce napraviti od svake reci koja ima paran broj svih slova i eventualno jedno neparno

function palindromeRearranging(s) {
  const dict = [...s]
    .reduce((obj, x) => {
      obj[x] = obj[x] ? obj[x] + 1 : 1
      return obj
    }, {})
  return Object.values(dict).filter(x => x % 2).length < 2
}

console.log(palindromeRearranging("milovanavoliana"))
