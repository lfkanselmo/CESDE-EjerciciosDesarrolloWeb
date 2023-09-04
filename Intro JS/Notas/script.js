// Declaracion de variables
var button = document.getElementById("btnShow");
var names = "Anselmo Ortega";
alert("El nombre es: " + names);
var n1 = 3;
var n2 = 7;
var result = n1 + n2;

// alert() --> muestra un pop-up en el navegador
alert("El resultado es: " + result);

// console.log() --> muestra por medio de la consola
console.log(result);

// document.write() --> muestra el resultado del navegador
document.write("<h1> El resultado es: " + result + "</h1>");


// Ingresar informacion  prompt()
//Funciones para convertir a numeros parseFloat(), ParseInt(), Number()
n1 = Number(prompt("Ingrese valor 1: "));
n2 = Number(prompt("Ingrese valor 2: "));
result = n1 + n2;
document.write("<h1> El resultado es: " + result + "</h1>");

// Ingresar informacion  confirm()
var answer = confirm("¿Es mayor de edad?");
document.write("<h2> ¿Usted es mayor de edad?: " + answer + "<h2>");

