/*  Palabra reservada this
    this. lee los valores que estan en el mismo objeto 

*/

const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true,
     mostrarInfo: function() {
          console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio } `)
     }
}


const producto2 = {
     nombre: "Laptop",
     precio: 800,
     disponible: true,
     mostrarInfo: function() {
          console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio } `)
     }
}

producto.mostrarInfo();
producto2.mostrarInfo();