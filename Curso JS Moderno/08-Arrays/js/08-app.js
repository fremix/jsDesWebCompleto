/** 
 *   Destructuring of Objects: Destructuracion de Objetos
 */
const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true
}

// Destruturing
const { nombre } = producto;
console.log(nombre);

// Destruturing con Arrays:Sacar de la estructura
const numeros = [10,20,30,40,50];
console.table(numeros)

const [primero, ...tercero] = numeros; // para juntar en un Arrays los elementos que no fueron parte de Destructuring

/*console.log( primero );
console.log( segundo );*/
console.log( tercero );
