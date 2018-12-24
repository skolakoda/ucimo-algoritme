const flatten = (...args) => {
  return args.reduce((arr, curr) =>
    arr.concat(Array.isArray(curr) ? flatten(...curr) : curr)
  , [])
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]])) // [1, 2, 3, 4, 5, 6, 7]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])) // ['a', 'b', 2, 3, null, 4, 'c']
