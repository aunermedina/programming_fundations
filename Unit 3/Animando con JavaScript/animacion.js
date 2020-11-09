// archivo animacion.js
// obtenemos el lienzo y configuramos la linea
var lienzo = document.getElementById("mi-canvas");
var ctx = lienzo.getContext("2d");
ctx.strokeStyle = "blue";

// defino actualizacion de la pantalla
var actualiza = requestAnimationFrame(animarCirculo, 1000);
// defino variante de angulo
var rad = 0;

function animarCirculo() {
    // incrementar el valor del angulo x * pi y si es mayor a 2, reinicio a cero
    if (rad >= 2) {
        rad = 0;
    } else {
        rad = rad + 0.025;
    } 
    // llamar la funcion para dibujar el angulo modificado
    dibujarCirculo(rad);
    // actualizar la pantalla para el efecto de animacion
    actualiza = requestAnimationFrame(animarCirculo);
}

function dibujarCirculo(i) {
    // funcion para dibujar circulo
    // limpio el lienzo
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    ctx.beginPath();
    ctx.lineWidth = 10;
    // dibujo el segmento del arco acorde al parametro pasado
    ctx.arc(lienzo.width / 2, lienzo.height / 2, 50, 0, Math.PI * i, false);
    ctx.stroke();
}

dibujarCirculo();