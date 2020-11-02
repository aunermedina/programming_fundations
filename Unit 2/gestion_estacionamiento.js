// Operacion 1. Crea un arreglo vacío y posteriormente agrega los vehículos que están en el estacionamiento e imprime una lista, en la que recorras el arreglo y muestres cada vehículo en una línea separada, informando de su puesto en dicha lista, y no todos en la misma línea, recorriendo el arreglo para ello. También informarás cuántos carros existen en este momento en el estacionamiento. 

var estacionamiento = [];

estacionamiento.push('Rojo', 'Gris', 'Azul', 'Amarillo', 'Verde');

for (let index = 0; index < estacionamiento.length; index++) {
    console.log('Carro: ' + estacionamiento[index] + ', puesto: ' + index);
}
console.log('\nCapacidad actual: ' + estacionamiento.length);

console.log('\n------------------\n');
// agregar un vehiculo blanco en el puesto vacio y vuelve a actualizar la lista anterior
estacionamiento.push('Blanco');

for (let index = 0; index < estacionamiento.length; index++) {
    console.log('Carro: ' + estacionamiento[index] + ', puesto: ' + index);
}
console.log('\nCapacidad actual: ' + estacionamiento.length);

console.log('\n------------------\n');

// Sustituye el vehículo azul por uno negro

var iAzul = estacionamiento.indexOf('Azul');

estacionamiento.splice(iAzul, 1, 'Negro');

// elimina el vehículo rojo, y mueve los vehículos para no dejar su lugar vacío. 

estacionamiento.shift();

// recorre nuevamente la lista con las posiciones actualizadas.
for (let index = 0; index < estacionamiento.length; index++) {
    console.log('Carro: ' + estacionamiento[index] + ', puesto: ' + index);
}
console.log('\nCapacidad actual: ' + estacionamiento.length);

console.log('\n------------------\n');

// Elimina ahora el último elemento de la lista. 


estacionamiento.pop();

// recorre nuevamente la lista con las posiciones actualizadas.
for (let index = 0; index < estacionamiento.length; index++) {
    console.log('Carro: ' + estacionamiento[index] + ', puesto: ' + index);
}
console.log('\nCapacidad actual: ' + estacionamiento.length);

console.log('\n------------------\n');

// El chofer del vehículo amarillo quiere ir personalmente por su auto. Elabora el código que identifique la posición del vehículo amarillo en el estacionamiento y devuelve en un mensaje dicha información. Ejemplo: El vehículo Amarillo se encuentra en la posición X.

var iAmarillo = estacionamiento.indexOf('Amarillo');

// Agrego 1 a la cuenta, ya que nadie cuenta comenzando con el cero en la vida real
console.log('El vehículo Amarillo se encuentra en la posición: ' + (iAmarillo + 1) );

console.log('\n------------------\n');

// ------------------------
// Escribe una función a la que se le pase como argumento un auto y que usando un ciclo revise la lista para ver si el carro está todavía en el estacionamiento. 

var encontrado = false;
var pos_carro = 0;

function buscarCarro(carro) {
    for (let index = 0; index < estacionamiento.length; index++) {
        const elemento = estacionamiento[index];
        if (elemento == carro) {
            encontrado = true;
            pos_carro = index + 1; // Agrego 1 a la cuenta, ya que nadie cuenta comenzando con el cero en la vida real
            break; // detenemos el ciclo si el carro fue encontrado
        } 
        
    }

    if (encontrado == true) {
        console.log('El vehículo ' + carro + ' se encuentra en la posición: ' + pos_carro);
    } else {
        console.log('Carro no encontrado.');
    }
}

// pruebas de funcion
buscarCarro('Blanco'); // Carro no se encuentra
buscarCarro('Gris'); // Carro encontrado

console.log('\n------------------\n');