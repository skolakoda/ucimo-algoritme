// rotiranje matrice za 90 stepeni

rotiraj = a => 
	a.map((row, rowIndex) => 
		a.map(row => row[rowIndex]).reverse())

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

console.log(rotiraj(a))
/*
[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]
*/
