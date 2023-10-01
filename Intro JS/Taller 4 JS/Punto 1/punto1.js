/*
1.	Crea y llama una función que recibe el ancho y 
el alto de un rectángulo y calcula su superficie.  Fórmula: superficie = ancho * alto.
*/

function superficie(ancho, alto){
    return ancho * alto;
}

let ancho = Number(prompt("Ingrese el ancho del rectangulo"));
let alto = Number(prompt("Ingrese el alto del rectangulo"));

document.write("<h1> La superficie es:  </h1>" + superficie(ancho, alto));