/*
2.	Crea y llama las funciones 
necesarias para recibir la velocidad en Kilómetros y mostrarlas en metros y millas.
*/

function convertir(kilometros){
    let millas = kilometros * 0.621371;
    let metros = kilometros * 1000;

    document.write(kilometros + " kilometros por hora, equivalen a: " + millas + " millas por hora <br>");
    document.write(kilometros + " kilometros por hora, equivalen a: " + metros + " metros por hora");
}

let velocidad = Number(prompt("Ingrese la velocidad en kilometros por hora"));

convertir(velocidad);