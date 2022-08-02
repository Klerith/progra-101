
export let numbers = [1, 6, 8, -14, 2, 7, -10, 3, 5 ];
let maxNumber = -9999999;

for( let i = 0; i < numbers.length; i++ ) {

    if ( numbers[i] >= maxNumber ) {
        maxNumber = numbers[i];
    }
}


console.log('El número mayor es:', maxNumber );
