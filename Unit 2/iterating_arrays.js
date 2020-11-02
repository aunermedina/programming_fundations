// lista inicial de compras
let lista_compras = ['leche', 'huevos', 'pan', 'yogurt', 'frijoles', 'pollo', 'café', 'arroz'];
var lista = "";

console.log('LISTA INICIAL DE COMPRAS:');
lista_compras.forEach(function(elemento, indice, array) {
    lista += elemento + ", "; // concatenamos el elemento para mostrar solo una linea
})
console.log(lista); // imprime lista en consola

lista = ""; // limpiamos variable lista

// lista inicial invertida
lista_compras.reverse();
console.log('LISTA INICIAL DE COMPRAS INVERTIDA:');
lista_compras.forEach(function(elemento, indice, array) {
    lista += elemento + ", "; // concatenamos el elemento para mostrar solo una linea
})
console.log(lista); // imprime lista en consola

lista = ""; // limpiamos variable lista

// Sustituimos los elementos leche por leche descremada y el café por café descafeinado

var lechePos = lista_compras.indexOf('leche'); // obtenemos el indice del elemento
lista_compras[lechePos] = 'leche descremada'; // sustituimos con base al indice

var cafePos = lista_compras.indexOf('café'); // obtenemos el indice del elemento
lista_compras[cafePos] = 'café descafeinado'; // sustituimos con base al indice

console.log('LISTA CON ELEMENTOS SUSTITUIDOS:');
for (let index = 0; index < lista_compras.length; index++) {
    lista += lista_compras[index] + ", "; // concatenamos el elemento para mostrar solo una linea
}
console.log(lista); // imprime lista en consola
