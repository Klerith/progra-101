
export let employees: string[] = ['Fernando','Melissa','Eduardo'];
export let salaries: number[] = [1500, 2400, 3200];

// let flowers: string[] = ['Rosa','Girasol','Lirio','Rosa Azul'];

// if ( people[3] ) {
//     console.log( people[3] )
// }

// for( let i = 0; i < flowers.length ; i++ ) {
//     console.log( flowers[i] );
// }


// for
// Fernando tiene un salario de 1500
// Melissa tiene un salario de 2400

for( let i = 0; i <= employees.length - 1; i++ ) {
    let employee = employees[i];
    let salary   = salaries[i];

    console.log( employee + ' tiene un salario de '+ salary );
}