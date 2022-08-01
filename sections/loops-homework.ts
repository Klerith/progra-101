
export let base  = 10; // obligatoria
export let limit = 50; // defecto 10

// for( let i = 1; i <= limit; i++ ) {
//     console.log( base, ' x ', i, ' = ', base * i );
// }

// let i = 1;
// while ( i <= limit ) {
//     console.log( base, ' x ', i, ' = ', base * i );
//     i++;
// }

let i = 1;
do {
    console.log( base, ' x ', i, ' = ', base * i );
    i++;
} while ( i <= limit );






