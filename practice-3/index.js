/**
 * Operaciones aritméticas
 */

const a = 3
const b = 5
const c = a + b;

console.log(a);

/**
 * Operaciones con variables
 */
let number1 = 10
let number2 = 5
let result = 0;

//Suma
//0    =   10     +    5
result = number1 + number2;
console.log(result); //15

//Resta
//15    =  10     -   5
result = number1 - number2;
console.log(result); //5

//Multiplicación
result = number1 * number2;
console.log(result); //50

//División
result = number1 / number2;
console.log(result) //2

//Módulo o residuo de una división
/**
 *  10 |_ 5
 * -10    2
 *   0
 */
result = number1 % number2;       
console.log(result)  //0

/**
 * Concatenación
 */

const firstName = 'Juan';
const lastName = 'Diavanera';
const fullName = firstName + ' ' + lastName;

//Concatenación con plantillas literales
let word1 = 'Hola';
let word2 = 'Mundo';
let sentence = `${word1} ${word2}`;
console.log(sentence);
//Forma tradicional
sentence = word1 + ' ' + word2;

let word3 = 'Mia';
let word4 = 'Susan'

sentence = word1 + ' estoy en este ' + word2 + ' con ' + word3 + ' y ' + word4;
//Hola estoy en este mundo con Mia y Susan;
console.log('Frase 1:', sentence);

sentence = `${word1} estoy en este ${word2} con ${word3} y ${word4}`;
console.log('Frase 2', sentence);

let word5 = 'Casa';
let word6 = 'Guaduas';

sentence = `${word1} estoy en este ${word2} con ${word3} y ${word4}.
Y estamos comiendo pastel de pollo en la ${word5} de ${word6}.`;

console.log('Con plantillas literales:', sentence);

sentence = word1 + ' estoy en este ' + word2 + ' con ' + word3 + ' y ' + word4 + '\n' +
'Y estamos comiendo pastel de pollo en la ' + word5 + ' de ' + word6 + '.';

console.log('Sin plantillas literales:', sentence);