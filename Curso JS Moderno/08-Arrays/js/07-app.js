

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
     Nombre: "Servidor DELL",
     Precio: 45000
}


// .push agrega un elemento al final de un Arrays
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);


carrito.unshift(producto3); // Para insertar un elemento al inicia del Arrays
console.table(carrito);
/**
 * Imperativa modifica el objeto actual, Declarativa NO
 * 
 */


/*************
// Eliminar el ultimo elemento del Arrays
carrito.pop();
console.table(carrito);

// Eliminar del inicio del carrito
carrito.shift();
console.table(carrito);
 */

// Eliminar de en medio, se registran las coordenadas y la cantidad de elementos a eliminar.

carrito.splice(3, 1); 
console.table(carrito);