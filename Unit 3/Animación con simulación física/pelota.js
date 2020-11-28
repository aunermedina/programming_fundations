// archivo pelota.js
// Variables globales
var lienzo = document.getElementById("canvas");
var ctx = lienzo.getContext("2d");
// valor del radio de la pelota
var radio = 25;
// posiciones iniciales de la pelota x e y aleatoreas.
var x = Math.floor(Math.random() * (lienzo.width - (radio * 2) + 1)) + (radio * 2); // 50 a 750
var y = Math.floor(Math.random() * (lienzo.height - (radio * 2) + 1)) + (radio * 2); // 50 a 550
// valores para desplazar (velocidad de la pelota, mayor numero, mayor velocidad)
var dx = 5;
var dy = -5;
// hay un error obteniendo la posicion inicial aleatoria, se sale rango entonces checo los valores y si es asi vuelo a pedir otro valor en rango.
if ( x > 750 || x < 50) {
    x = Math.floor(Math.random() * (lienzo.width - (radio * 2) + 1)) + (radio * 2); // 50 a 750
}
if ( y < 50 || y > 550) {
    y = Math.floor(Math.random() * (lienzo.height - (radio * 2) + 1)) + (radio * 2); // 50 a 550
}

// defino actualizacion de la pantalla
var actualiza = requestAnimationFrame(moverPelota, 10);

function dibujarPelota() {
    // funcion para dibujar pelota
    
    // dibujo la pelota
    ctx.fillStyle = "navy";
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function moverPelota() {
    //funcion para mover la pelota

    // limpio el lienzo
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    // dibujo la pelota
    dibujarPelota();

    // si el borde de la pelota toca el borde izq o derecho del lienzo
    if (x + dx > lienzo.width-radio || x + dx < radio) {
        // invertimos la direccion
        dx = -dx;
    }
    // si el borde de la pelota toca el borde inferior o superior del lienzo
    if (y + dy > lienzo.height-radio || y + dy < radio) {
        // invertimos la direccion
        dy = -dy;
    }
    
    // aumentamos la posicion de la pelota para indicar movimiento
    x += dx;
    y += dy;

    // actualizamos el canvas para simular movimiento
    actualiza = requestAnimationFrame(moverPelota);
}