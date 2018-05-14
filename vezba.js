function insertionsort(a, n) {
  let i
  for (i = 1; i < n; i++) {
    let j, tmp = a[i]
    for (let j = i; j > 0 && a[j-1] > tmp; j--) {
      a[j] = a[j-1]
    }
    a[j] = tmp
  }
  return a
}

const niz = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionsort(niz, niz.length))
