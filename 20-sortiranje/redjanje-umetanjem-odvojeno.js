// https://www.khanacademy.org/computing/computer-science/algorithms#insertion-sort

const insert = function(array, rightIndex, value) {
  let i
  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i]
  }
  array[i + 1] = value
}

const insertionSort = function(array) {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i])
  }
}

const array = [22, 11, 99, 88, 9, 7, 42]
insertionSort(array)
console.log('Array after sorting:  ' + array)