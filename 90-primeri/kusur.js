// https://www.codewars.com/kata/vasya-clerk/train/javascript
// ulaz u bioskop je 25 dolara. ljudi u redu drze novcanice od 100, 50 i 25.
// kasa je inicijalno prazna. izracunaj da li ces moci svima da vratis kusur.

function tickets(peopleInLine) {
  const bills = {
    100: 0,
    50: 0,
    25: 0
  }
  for (const bill of peopleInLine) {
    bills[bill]++
    if (bill == 50) bills[25]--
    if (bill == 100) {
      bills[25]--
      if (bills[50]) bills[50]--
      else bills[25] -= 2
    }
    if (bills[25] < 0) return 'NO'
  }
  return 'YES'
}

console.log(tickets([25, 25, 25, 50, 75]))
console.log(tickets([25, 25, 100]))