const brojevi = [1, 5, 2, 5, 33, 44, 77, 6, 7, 8, 9, 0, 2, 55, 66]

// kvadratno: O(n^2)
const nadjiNajveci = niz => {
    for(let i = 0; i < niz.length; i++){
        let nadjen = true
        for(let j = 0; j < niz.length; j++){
            if(niz[i] < niz[j]){
                nadjen = false
            }
        }
        if (nadjen) return niz[i]
    }
    return null
}

// linearno
const nadjiNajveci2 = niz => {
    let najveci = niz[0]
    for(let i = 1; i < niz.length; i++){        
       if(najveci < niz[i]) {
           najveci = niz[i] 
       }
    }
    return najveci
}

console.log(nadjiNajveci(brojevi))
console.log(nadjiNajveci2(brojevi))