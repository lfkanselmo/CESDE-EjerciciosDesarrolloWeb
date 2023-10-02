// Declarar el array
var frutas = ["Mango", "Banano", "Piña"];

//Mostrar informacion del array
document.write(frutas[0] + "<br>");
document.write(frutas[1] + "<br>");

//Mostrar con forEach
frutas.forEach((f) => {
  document.write(f + "<br>");
});

//Llenar un arreglo con diferentes tipos de datos
var datos = [
  "texto",
  3030,
  true,
  function () {
    return "hola desde funcion";
  },
  ["array 2", 8888, false],
];

document.write("Dato 0: " + datos[0] + "<br>");
document.write("Dato 1: " + datos[1] + "<br>");
document.write("Dato 2: " + datos[2] + "<br>");
document.write("Dato 3: " + datos[3]() + "<br>");
document.write("Dato 4: " + datos[4][1] + "<br>");

//Llenar un array vacio
var verduras = [];

var numVerduras = parseInt(prompt("Ingrese la cantidad de verduras"));

for (let i = 0; i < numVerduras; i++) {
  verduras[i] = prompt("digite la verdura " + i);
}

for (let j = 0; j < verduras.length; j++) {
  document.write("Verdura: " + verduras[j] + "<br>");
}
