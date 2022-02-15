// Crear un objeto dentro de otro objeto
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

// console.log(producto);
console.log(producto.informacion.fabricacion.pais);
/* console.log(producto.informacion.medida);
console.log(producto.informacion.peso); */

/* 
const alumno = {
     mat: "012345",
     nombre: "Freddy",
     appat: "Morales",
     apmat: "izquierdo",
     sem: "5to",
     licenciatura: 6
}

console.log(alumno); */