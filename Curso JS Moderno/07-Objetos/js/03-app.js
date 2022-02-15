// Objetos
const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true,
     
}

// Agregar nuevas propiedas al objeto
producto.imagen = "imagen.jpg";

// Eliminar propiedades del objeto
delete producto.disponible; // Esta sintaxis se usar para elminar valores del objeto y que no queremos mostrar en la consulta

console.log(producto);