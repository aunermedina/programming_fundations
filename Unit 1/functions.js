/*
La siguiente función calculara el area y volumen de un cilindro
El volumen de un cilindro es π r² h, y el área de su superficie es 2π r h + 2π r²
*/
var r = 5;
var h = 12;

function areaCirculo(radio) {
    /* 
    Calcula el área de un cirulo
    Valor:
    radio: entero
    */ 
    return 3.14 * radio**2;  // regresa area del circulo
}

function calculoGeometrico(radio, height) {
    /* 
    Calcula el area y volumen de un cilindro
    Valores:
    radio: entero
    height: entero
    */
    var area = (2 * 3.14 * radio * height) + (2 * areaCirculo(radio)); // Calcula el area
    var volumen = areaCirculo(radio) * height;  // Calcula el volumen
    
    return "Area: " + area + " cm2 y Volumen: " + volumen + " cm3"; // regresa los resultados.
}

resultado = calculoGeometrico(r, h);

console.log(resultado);