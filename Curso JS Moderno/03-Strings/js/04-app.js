// Eliminar espacios en blanco de un String

const producto = '               Monitor 20 pulgadas                ';

console.log(producto);
console.log(producto.length);

// Eliminar espacio del inicio
console.log( producto.trimStart() );
console.log(producto.length);
console.log( producto.trimEnd() );
console.log(producto.length);

// Metodos para eliminar espacios en blanco al inicio y al final
console.log(producto.trimStart().trimEnd());




