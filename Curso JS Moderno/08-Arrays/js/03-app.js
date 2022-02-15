// Como acceder a todos los elementos de un Arrays

const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto'];

console.table(meses);

// 1.- Necesitamos saber cuanto mide el Arrays

console.log(meses.length);

// Para recorrer todo el Arrays es con un for

for (let i = 0; i < meses.length; i++ ){ 
    // console.log(i);

     console.log( meses[i] );
}

