/*3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen*/

const rutaIda = ['Pueblo Origen', 'pueblo 1', 'pueblo 2', 'destino'];
console.log('Ruta de Ida:', rutaIda);

const reversed = rutaIda.reverse();
console.log('reversed:', reversed);

console.log('Ruta de Vuelta:', rutaIda);
// expected output: "array1:" Array ["three", "two", "one"]