/*  
     Creacion de objetos
*/ 

// Object literal
const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true,
     }



// Object constructor

function Producto(nombre, precio) {
     this.nombre = nombre;
     this.Producto = producto;
     this.disponible = true;
}
     
const producto2 = new Producto('Monitor 20 pulgadas', 500);
console.log(producto2);