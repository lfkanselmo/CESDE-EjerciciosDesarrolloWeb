/*
Cree una función que pida la fecha actual y 
por medio de otra función calcule cuántos días y semanas faltan para terminar el año.
*/

function pedirFechaActual(){
    return prompt("Ingrese fecha actual en formato yyyy-MM-dd");
}

function cuantosDiasFaltan(fecha){
    fechaActual = new Date(fecha);
    finAnho = new Date("2023-12-31");

    let milisegundosDia = 86400000;

    return (finAnho - fechaActual)/milisegundosDia;
}

let fecha = pedirFechaActual();

document.write( "<h1>" + fecha + " </h1> <br>");

document.write("Faltan " + cuantosDiasFaltan(fecha) + " días para el fin de año");