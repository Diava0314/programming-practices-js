const nombre = "Esteban";
const apellido = "Galvis";
const edad = 18;
const esMayorDeEdad = true;

class Vehiculo {
    marca;
    modelo
    nombre;

    constructor(args) {
        this.marca = args.marca;
        this.modelo = args.modelo;
        this.nombre = args.nombre;
    }
}
 
const vehiculo1 = new Vehiculo({marca: "Toyota", modelo: 2015, nombre: "corolla"});
const vehiculo2 = new Vehiculo({marca: "Pepito", modelo: 2016, nombre: "xyz" });
const vehiculo3 = new Vehiculo({marca: "ford", modelo: 2011, nombre: "mustang"});

console.log(vehiculo1);
console.log(vehiculo3);

class Pastel {
    sabor;
    ingredientes;
    color;

    constructor(args){
        this.sabor = args.sabor;
        this.ingredientes = args.ingredientes;
        this.color = args.color;
    }

}
const pastel = new Pastel ({sabor: "chicle", ingredientes:["azucar", "huevos", "leche"], color: "azul"});
const pastel1 = new Pastel ({sabor: "fresa", ingredientes: ["fresa", "leche", "polvo magico"], color: "arcoires "});
console.log(pastel, pastel1);