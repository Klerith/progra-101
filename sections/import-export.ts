import {
     addTwoNumbers, 
     divideTwoNumbers, 
     substractTwoNumbers,
     timesTwoNumbers,
} from '../helpers/math-helpers';

// let firstName = 'Juan';
let num1 = 10;
let num2 = 20;

// greet( firstName );
let total1: number = addTwoNumbers( num1, num2 );
let total2: number = substractTwoNumbers( num1, num2 );
let total3: number = timesTwoNumbers( num1, num2 );
let total4: number = divideTwoNumbers( num1, num2 );

console.log('add: ', total1 );
console.log('substract: ', total2 );
console.log('Times: ', total3 );
console.log('Divide: ', total4 );
