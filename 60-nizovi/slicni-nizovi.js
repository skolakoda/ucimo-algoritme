/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements.
*/

function areSimilar(a, b) {
  const aDiff = a.filter((x, i) => x != b[i])
  const bDiff = b.filter((x, i) => x != a[i])
  return !aDiff.length || aDiff.length == 2 && aDiff.toString() == bDiff.reverse().toString()
}

console.log(areSimilar([1, 2, 3, 4, 5], [2, 1, 3, 4, 5]))