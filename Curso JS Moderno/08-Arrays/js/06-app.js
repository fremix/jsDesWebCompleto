// Arrays con spread operator con la forma declarativa

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

let  resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table( resultado );

/* 
     Carrito se mantiene vacio, se crea la variable resultado y se le asigna un Arrays, se hace una copia de carrito y se le agrega un elemento, posteriormente se hace una copia de la variable resultado y se le agrega el otro producto, uno puede jugar con la posicion de los articulos en dnd queires que se inserte en el Arrays.
*/