/**
 * Variables, constantes y tipos de dato
 * 
 * - Una variable es un valor que puede ser modificado.
 * - Una constante es un valor que una vez definido no puede ser modificado.
 * - Un tipo de dato, es una forma de definir en programación la naturaleza de la información.
 * --> Tipos de datos primitivos
 *    - Numérico - number
 *    - Texto - string
 *    - Lógico - boolean
 *    - Propios del lenguaje de programación
 *      - Indefinido - undefined
 *      - Objeto - object
 * --> Tipos de datos primitivos compuestos
 *    - Array de números - number[]
 *    - Array de textos - string[]
 *    - Array de booleanos - boolean[]
 *    - Array de indefinidos - undefined[]
 *    - Array de objetos - Object[]
 * --> Tipos de datos fabricados por el programador   
 *    - Array de personas (El objeto Person es construido por el prpgramador) - Person[]
 */

//Definición de una constante:
const name = 'Juan';                    //string
const lastName = 'Diavanera';           //string
const age = 18;                         //number
const favouriteColor = 'Verde';         //string
const isSingle = false;                  //boolean
const isAvailableForWork = true;        //boolan
const canBeAcceptedOnTheCompany = isSingle && isAvailableForWork  //boolean

const fruits = ['Manzana', 'Pera', 'Uva', 'Banano']       //string[]
const person = ['Juan', 'Diavanera', 18, 'Verde', false, true, undefined]     //string[] | number[] | boolean[] | undefined[] o también any[]  


class Animal {
  name;
  type;
  numberOfLegs;

  constructor(args) {
    this.name = args.name;
    this.type = args.type;
    this.numberOfLegs = args.numberOfLegs;
  }
}

const animal1 = new Animal({name: 'Perro', type: 'Canino', numberOfLegs: 4});  //Animal --> Objeto animal
const animal2 = {name: 'Jabalí', type: 'Porcino', numberOfLegs: 4}; //Object --> Objeto genérico
const animals = [animal1, animal2] //Object[]  --> Animal[]

console.log(animal1)
console.log(animal2);

class Vehicle {
  name;
  brand;
  model;
  numberOfWheels;

  constructor(args) {
    this.name = args.name;
    this.brand = args.brand;
    this.model = args.model;
    this.numberOfWheels = args.numberOfWheels;
  }
}

const vehicle1 = new Vehicle({ brand: 'Renault', name: 'Automóvil', model: 4, numberOfWheels: 4});

/**
 * Definición de un objeto:
 * 
 * Un objeto se compone de llave : valor y se define entre {}
 * 
 * - La llave es la que va antes del :
 * - El valor va después del : y puede ser cualquier tipo de dato
 * 
 * Ejemplos:
 * llave | valor
 * {name: 'Juan'}
 * {age: 22}
 */

/**
 * Las variables se pueden definir con las palabras reservadas:
 *  - let
 *  - var
 */

//Para inicar una variable por primera vez, se debe anteponer la palbra reservada let o var
let message = 'Hola mundo';

//Redefinir la variable -> se llama la variable nuevamente sin su palabra reservada para cambiar el valor
message = 'Hola Juan';


var country = 'Colombia';
country = 'Argentina';

console.log('Country', country);