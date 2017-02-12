# Učimo algoritme

Algoritam je procedura za obavljanje nekog zadatka. Složenost algoritma se meri u broju koraka potrebnih da se zadatak obavi. Broj koraka je direktno proporcionalan trajanju algoritma. Efikasnost je obrnuto proporcionalna složenosti.

Algoritme svi koristimo od malih nogu. Na primer, kao mali smo skupljali sličice. Da bismo ih poređali po brojevima, verovatno smo imali neku svoju proceduru za ređanje, odnosno algoritam.

![](slicice.jpg)

Računarska nauka pokušava da utvrdi koliko je neki algoritam složen, odnosno učinkovit.

## Konstantna složenost: O(1)
> ***vreme uvek isto, nezavisno od unosa***

Konstantni algoritmi uzimaju otprilike isto vremena bez obzira na unos.

A good example of this is fetching a single random element from an array. The size of the array doesn't matter because we can access any element of the array as fast as any other element.

```js
const randomElement = array => {
	array[Math.floor(Math.random() * array.length)]
}
```


## Logaritamska složenost: O(log n)
> ***vreme raste sporije od unosa***

For an algorithm to have logarithmic efficiency, written O(log n), it must, for each element acted on, eliminate some fraction of the remaining inputs. For example acting on an element in the middle of an array must remove all elements left of the current element from future consideration. It is not enough to simply perform less work. The amount less work must be some consistent fraction.

A good way to think about this is: if the algorithm is given an array, then initially every element in the array is under consideration. We then look at the center of the array and eliminate all the elements left of the center from consideration.

Najpoznatiji primer logaritamskog algoritma je binarna pretraga.


## Linearna složenost: O(n)
> ***vreme raste isto kao unos***

Linearna funkcija je ona koja ima formu f(x) = ax + b. U programiranju, linearni algoritam ima vreme izvrsenja u okviru nekog konstantnog kolicnika broja unosa.

```js
for(let i = 0; i < n; i++) {
    console.log(array[i])
}
```

An algorithm being in O(n) does not necessarily mean that it performs the same work on each element, only that the amount of work that it performs on each of those elements does not depend on the total number of elements.


## Kvadratna složenost: O(n^2)
> ***vreme raste unos na kvadrat***

Kvadratni algoritmi su oni u kojima količina rada po elementu zavisi od ukupnog broja elemenata. This is called O(n^2) because each of the n inputs has O(n) work performed on it.

As long as we can craft some O(n) (linear) function that describes the work done on each of the n inputs to an algorithm, that algorithm will be quadratic.

Primer, kombinacija elemenata svakog sa svakim:
```js
const osobe = ["Alice", "Bob", "Carol", "Dave", "Ed"];
const n = osobe.length;

for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++){
        console.log(osobe[i] + ", " +  osobe[j] );   
    }
}
```


## Eksponencijalna složenost: O(x^n)
> ***vreme raste na stepen unosa***

Eksponencijalne funkcije su one kod kojih svako uvećenje unosa za jedan uvećava vreme izvršenja za neki multiplikator x. Efikasnost tih algoritama je O(x^n), na primer: O(2^n).

Recursive fibonacci algorithm is an example of an exponential algorithm, because increasing the number of the desired fibonacci number essentially doubled the amount of work to be done.
