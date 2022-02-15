// Añadir nuevos elementos al inicio o al final del Arrys
/*
const meses = ['enero','febrero','marzo'];
// meses [3] = 'abril'; para abregar elementos al arrays, pero no es dinamico

meses.push('Abril','Mayo','Junio','Julio');

console.table(meses);

*/

const carrito = [];

// Definir un producto

const producto = {
         Nombre: "monitor 32 pulgadas",
         Precio: 500
}

const producto2 = {
     Nombre: "Laptop DELL Core i5",
     Precio: 15000
}

const producto3 = {
     Nombre: "Servidor HP Nano",
     Precio: 45000
}

const producto4 = {
     Nombre: "tablet Ipad",
     Precio: 18000
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.unshift(producto4); // Para insertar un elemento al inicia del Arrays

console.table(carrito);