// https://www.codewars.com/kata/function-composition/

compose = (f, g) => value => f(g(value))
// compose = (f, g) => (...a) => f(g(...a)) // sa vise argumenata

dodaj1 = a => a + 1
identicno = a => a

console.log(compose(dodaj1, identicno)(0) == 1)