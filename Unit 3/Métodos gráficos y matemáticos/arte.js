// archivo arte.js
// obtenemos el lienzo
var lienzo = document.getElementById("mi-canvas");
var ctx = lienzo.getContext("2d");

// arreglo de colores
var colores = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];


function dibujarCirculo(x, y, r, color) {
    // funcion par dibujar un circulo
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
}


function dibujarCanvas() {
    //funcion para dibujar el canvas con 70 circulos de diferente tamanio y color
    var numCirculos = Math.floor(Math.random() * 76);
    
    for (let index = 0; index < numCirculos; index++) {
        // posiciones aleatorias de circulos y color
        var posX = Math.floor(Math.random() * 801);
        var posY = Math.floor(Math.random() * 601);
        var radio = Math.floor(Math.random() * 60);
        var colorCir = colores[Math.floor(Math.random() * colores.length)];
        // dibujamos el circulo
        dibujarCirculo(posX, posY, radio, colorCir);
    }
}

dibujarCanvas();