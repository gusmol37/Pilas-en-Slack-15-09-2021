/*2.- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number "nuevo" y "viejo", de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */ 


function replace(array, newNumb, oldNumb) {
    newArray = [];
    let newIndex = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === oldNumb) {
                newIndex = i;
        }
    }
        array[newIndex] = newNumb
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if (j <= newIndex) newArray.push(element);
             
        }
        return newArray;
    
}

console.log(replace([3,2,3,4,6,8,1,2,5,5], 7 ,2))