
export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for( let i = 0; i < numbers.length; i ++ ) {

    let number = numbers[i];

    if (  (number % 2 ) === 0 ) {
        console.log(number + ' es par');
    } else {
        console.log(number + ' es impar');
    }

}


