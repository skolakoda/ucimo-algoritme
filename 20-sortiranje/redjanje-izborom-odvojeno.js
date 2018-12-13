function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function getMin(arr, startIndex) {
  let min = startIndex
  for (let i = min + 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i
  }
  return min
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++)
    swap(arr, i, getMin(arr, i))
  return arr
}

console.log('Array after sorting:  ' + selectionSort([22, 11, 99, 88, 9, 7, 42]))
