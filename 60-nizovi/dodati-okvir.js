/*
https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

Transformisati ulaz:
[
  "abc",
  "ded"
]

U izlaz:
[
  "*****",
  "*abc*",
  "*ded*",
  "*****"
]
*/

function addBorder(picture) {
  const width = picture[0].length + 2
  return [
    '*'.repeat(width),
    ...picture.map(line => `*${line}*`),
    '*'.repeat(width)
  ]
}

console.log(addBorder(["abc", "ded"]))