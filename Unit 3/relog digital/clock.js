// Archivo clock.js

function Hora() {
    // obtenemos la fecha completa con hora
    var hoy = new Date();
    // extraemos la hora de la fecha completa
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var secs = hoy.getSeconds();
    // checamos si la hora es am o pm
    apm = (hr < 12) ? "AM" : "PM";
    // checamos si es la media noche poner 12
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    // ponemos un cero en frente de los numeros menores a 10 en minutos y segundos
    min = checarTiempo(min);
    sec = checarTiempo(secs);
    // imprimimos solo la hora en el parrafo con id reloj
    document.getElementById("reloj").innerHTML = hr + " : " + min + " : " + sec + " " + apm;

    // configuramos que la funcion Hora se ejecute cada medio segundo, asi actualiza cada segundo exacto
    var tiempo = setTimeout(function(){ Hora() }, 500);
}

function checarTiempo(tiempo) {
    // Funcion para agregar un 0 a numeros menores a 10
    if (tiempo < 10) {
        tiempo = "0" + tiempo;
    }
    return tiempo;
}