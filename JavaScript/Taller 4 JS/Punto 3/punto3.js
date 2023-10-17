/*
Por medio de una función calcula la circunferencia de un círculo 
utilizando la siguiente fórmula: circunferencia= 2*Math.PI*radio, 
también Crea y llama una función que recibe un número y calcula su cubo. Ejemplo:
function circunferencia (radio){
     Return formula;
}
*/

function circunferencia(radio){
    return 2 * Math.PI * radio;
}

let r = Number(prompt("Ingrese el radio de la circulo"));

document.write(" <h1> La circunferencia del circulo es: </h1> " + circunferencia(r).toFixed(1));