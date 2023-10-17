/*
1.	Guarda en un Array  6 frutas y 
muestra en el navegador cuales están guardadas en las  posiciones pares e impares.
*/

frutas = [];

for (let i = 0; i < 6; i++){
    frutas[i] = prompt("Ingrese la fruta " + i);
}

function frutasPares(frutas){
    document.write(" <h1> *** LAS FRUTAS EN POSICION PAR SON: *** </h1>");
    for (let i = 0; i < frutas.length; i++){
        if (i % 2 == 0){
            document.write(frutas[i] + "<br>" );
        }
    }
}

function frutasImpares(frutas){
    document.write(" <h1> *** LAS FRUTAS EN POSICION IMPAR SON: *** </h1>");
    for (let i = 0; i < frutas.length; i++){
        if (i % 2 != 0){
            document.write(frutas[i] + "<br>");
        }
    }
}

frutasPares(frutas);
frutasImpares(frutas);