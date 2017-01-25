// console.count() broji koliko je puta pomocna funkcija pozvana

let swap = function(arr, i, j) {
    console.count( 'swap' );
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
}

let bubbleSort = function( arr ) {
    let hasSwapped = false;
    do {
        hasSwapped = false;
        for ( let i = 0; i < arr.length - 1; ++i ) {
            if ( arr[i] > arr[i+1] ) {
                swap( arr, i, i+1 );
                hasSwapped = true;
            }
        }
    } while ( hasSwapped );
}

let arr = [ 5, 4, 3, 2, 1];

bubbleSort( arr )
