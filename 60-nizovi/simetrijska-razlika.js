/* 
  https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
  In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  return [...arr1.filter(el => !arr2.includes(el)), ...arr2.filter(el => !arr1.includes(el))]
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))