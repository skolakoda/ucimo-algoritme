![](slicice.jpg)

# Učimo algoritme

Algoritam je procedura za obavljanje nekog zadatka. Složenost algoritma se meri u broju koraka potrebnih da se zadatak obavi. Broj koraka je direktno proporcionalan trajanju algoritma. Efikasnost je obrnuto proporcionalna složenosti.

Algoritme svi koristimo od malih nogu. Na primer, kao mali smo skupljali sličice. Da bismo ih poređali po brojevima, verovatno smo imali neku svoju proceduru za ređanje, odnosno algoritam.

Računarska nauka pokušava da utvrdi koliko je neki algoritam složen, odnosno učinkovit.

## Konstantna složenost: O(1)
> ***vreme uvek isto, nezavisno od unosa***

Konstantni algoritmi traju približno isto vremena bez obzira na unos. Dobar primer je izbor nasumičnog elementa niza. Dužina niza ne utiče, jer svakom elementu pristupamo jednako brzo.

```js
const randomElement = array => array[Math.floor(Math.random() * array.length)]
```

## Logaritamska složenost: O(log n)
> ***vreme raste sporije od unosa***

Algoritam ima logaritamsku efikasnost ako za svaku radnju nad elementom eliminiše procenat unosa. Na primer, rad nad srednjem elementu uklanja iz razmatranja sve elemente levo.

Najpoznatiji primer logaritamskog algoritma je binarna pretraga.

## Linearna složenost: O(n)
> ***vreme raste isto kao unos***

Linearna funkcija ima formu `f(x) = ax + b`. U programiranju, vreme izvršenja linearnog algoritma jednako je nekom količniku (može i 1) broja unosa. Primer:

```js
let sum = 0
for (let i = 0; i < n; i++) {
    sum += i
}
```

Količina rada po elementu može biti različita, ali ne zavisi od količine unosa.

## Kvadratna složenost: O(n^2)
> ***vreme raste unos na kvadrat***

Kod kvadratnih algoritama količina rada po elementu zavisi od ukupnog broja elemenata. Svaki od n unosa zahteva n količinu rada.Klasičan primer je petlja unutar petlje:

```js
for(i = 0; i < n; i++){
  for(j = 0; j < n; j++){
    sum += 1;
  }
}
```

Jedna od primena je kombinacija svakog elementa sa svakim:

```js
const osobe = ["Kurta", "Murta", "Djoka", "Mika", "Pera"];
const n = osobe.length;

for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++){
        console.log(osobe[i] + ", " +  osobe[j] );   
    }
}
```

Ako imamo 3 petlje jednu unutar druge, onda imamo `O(n^3)` odnosno kubnu složenost.

## Eksponencijalna složenost: O(x^n)
> ***vreme raste na stepen unosa***

Kod eksponencijalnih funkcija uvećenje unosa za jedan uvećava vreme izvršenja za jedan stepen. Na primer, za jedan unos imamo 10 operacija, za dva unosa 10 * 10, za tri unosa 10 * 10 * 10.

Rekurzivni fibonačijev algoritam je primer eksponencijalne funkcije:

```js
const fibonaci = function(n) {
  if (n < 3) return 1
  return nadjiFibonaci(n - 1) + nadjiFibonaci(n - 2)
}
```

Takođe, pokušaj nalaženja lozinke putem svim mogućih kombinacija.
