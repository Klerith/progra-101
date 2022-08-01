
export let limite = 100;


for( let i = 0; i <= limite; i++ ) {

    if ( i === 5 ) {
        continue;
    }

    console.log('let i:', i);

    if ( i === 5 ) {
        break;
    }
}

console.log('Fin de programa')


