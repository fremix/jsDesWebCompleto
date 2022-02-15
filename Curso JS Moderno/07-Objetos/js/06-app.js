// Destructing de un objeto dentro de otro objeto
const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true,
          informacion: {
               medidas: {
                    peso: '1kg',
                    medida: '1 mt'
               },
                    fabricacion: {
                         pais: 'china',
          }
     }
}

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais}}} = producto;// Parar ingresar a las propiedades mas profundas del  objeto se debe indicar el objeto con dos puntos y abrir parentesis y dentro del parentersis escribir el objeto al cual queremos ingresar

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);



// Formato original de: Destructuring const {} = producto;
/* const { nombre } = producto;
const { precio } = producto;
const { marca } = auto;
const { raza } = perro;
const { id, municipios, colonias } = estado; */


