


export function printMultiplicationTable( base: number, limit: number = 10 ) {

    // if ( limit <= 0 ) {
    //     throw new Error('El límite debe de ser mayor a cero')
    // }
    if (  limit <= 0 ) {
        limit = 10;
    }

    for( let i = 1; i <= limit; i++ ) {
        console.log( base, ' x ', i, ' = ', base * i );
    }

}