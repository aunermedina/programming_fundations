// creo mi arreglo inicial
var miArreglo = [101, 102, 103, 104, 105, 106];

// utilizamos un ciclo for para iterar por cada uno de los elementos del arreglo
for (let index = 0; index < miArreglo.length; index++) {
    // guardamos el valor de cada index en una variable de nombre elemento
    const elemento = miArreglo[index];
    // imprimos en consolola cada uno de los enunciados requeridos
    console.log('El elemento ' + index + ' del arreglo es ' + elemento + ' y su valor final es ' + (elemento + 5));
}