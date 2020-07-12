"use strict"
// first task
let number = +prompt('Введите число');

let numberSubtraction = +prompt('Сколько отнять?');

let numberAddition = +prompt('Сколько прибавить?');

let numberMultiplication = +prompt('На сколько  умножить?');

let numberDivision = +prompt('На сколько разделить?');


let resultFirstTask = (((number - numberSubtraction) + numberAddition) 
* numberMultiplication)  / numberDivision; 

console.log(resultFirstTask);

alert( `(((${number} - ${numberSubtraction}) + ${numberAddition}) * ${numberMultiplication}) / ${numberDivision} = ${resultFirstTask} ` );

// second task
let name = "Artem";
let age = 27;
let isSmaller = 1 < 5;

console.log(`Переменная <name> имеет тип <${typeof(name)}>`);
console.log(`Переменная <age> имеет тип <${typeof(age)}>`);
console.log(`Переменная <isSmaller> имеет тип <${typeof(isSmaller)}>`);

// star task
let firstNumber = 2;
let secondNumber = 4;

let result = String(firstNumber) + String(secondNumber);

console.log(result);

