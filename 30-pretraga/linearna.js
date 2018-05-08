const niz = [1,2,3,4,5,6,7,8,9,10]
const trazeniBroj = 10

const nasumicnoTrazi = n => {
	let brojac = 1
	while(niz[Math.floor(Math.random() * niz.length)] !== n) brojac++
	return brojac
}

console.log(`Nasumicno nadjen broj ${trazeniBroj} u ${nasumicnoTrazi(trazeniBroj)} pokusaja.`)

const linearnoTrazi = n => {
	let brojac = 1
	while(niz[brojac-1] !== n) brojac++
	return brojac
}

console.log(`Linearno nadjen broj ${trazeniBroj} u ${linearnoTrazi(trazeniBroj)} pokusaja.`)
