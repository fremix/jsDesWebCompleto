// Objetos
const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true
}

producto.disponible = false;

delete producto.precio; // Para eliminar u ocultar una caracteristica del objeto usamos delete

console.log(producto);



/** 
 * Una variable cuando es definica con const NO puede reasignarse nuevamente, sin embargo al estar en un objeto si se pueden reasignar, reescribir o eliminar
*/