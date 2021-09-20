/* 1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
Salida: ['Manzana','Cebolla','Apio','Naranja']*/


function filtervegetables(array, num) {
    const newArray = [];
    for (let i = 0; i < num; i++) {
        const element = array[i];
        newArray.push(element);
        
    }
    return newArray;

}

console.log(filtervegetables(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'],4));