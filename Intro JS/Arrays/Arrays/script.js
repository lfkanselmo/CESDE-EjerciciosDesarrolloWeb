// Declarar el array
var frutas = ["Mango", "Banano", "Piña"];

//Mostrar informacion del array
document.write(frutas[0]);
document.write(frutas[1]);

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
