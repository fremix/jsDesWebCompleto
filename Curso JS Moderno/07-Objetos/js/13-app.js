/*   Los objetos se crean con llaves o parentesis

     metodos para objetos
          * keys: para obtener las llaves del objeto
          * values: para obtener los valores del objeto
          * entries: Para retornar todo el objeto

*/

const producto = {
     nombre: "Monitor 20 pulgadas",
     precio: 300,
     disponible: true,
     }

     console.log( Object.keys ( producto ));
     
     console.log(Object.values( producto ));

     console.log(Object.entries( producto ));