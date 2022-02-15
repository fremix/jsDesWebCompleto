// Metodos para los String o cadenas de texto.

const producto = 'Monitor 20 pulgadas';

console.log(producto);

// Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);

// Metodo para buscar una cadena de texto, reconoce mayusculas y minusculas y da la pocision de objeto, 
console.log(producto.indexOf('pulgadas'));

// cuando muestra -1 significa que no existe lo que se busca
console.log(producto.indexOf('pulgar'));

// Para sabe si lo que se busca esta incluido en la cadena de texto que se recorre.
console.log(producto.includes('pulgar'));
console.log(producto.includes('Monitor'));
