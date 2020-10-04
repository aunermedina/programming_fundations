// creo una variable para guardar la suma
var sum = 0;

// utilizo un ciclo for para ir incrementado las iteraciones, validar  que la suma es menor o igual a 100 y finalizar con la suma correspondiente.
for (var i = 1; (sum + i) <= 100; i++) {
    // se suma la serie.
    sum = sum + i;
    // Imprimo en consola el resultado del # de iteracion junto con la suma acumulada.
    console.log('Iteración ' + i + ': ' + sum)
}