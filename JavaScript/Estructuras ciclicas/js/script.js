//CICLO WHILE
document.write("CICLO WHILE <br> ");
//Paso 1 -> inicio
var x = 10;

// Paso 2 -> final
while (x >= 1) {
  //instruccion que se repite
  document.write(x + "<br>");

  //paso 3 -> intervalos
  x = x - 1;
}

document.write("-------------------------------------------------- <br> <br>");

document.write("CICLO FOR <br> ");
document.write("-- Ascendente -- <br> ");
//CICLO FOR
//Ascendente
//   paso 1     paso 2   paso 3
for (var i = 0; i <= 10; i++) {
  //intruccion que se repite
  document.write(i + "<br>");
}

document.write("-- Descendente -- <br> ");
//Descendente
for (var i = 10; i >= 1; i--) {
  //intruccion que se repite
  document.write(i + "<br>");
}

document.write("-------------------------------------------------- <br> <br>");

//CICLO DO-WHILE
document.write("CICLO DO WHILE <br> ");
//Paso 1 -> inicio
var x = 1;

// Paso 2 -> final
do {
  //instruccion que se repite
  document.write(x + "<br>");

  //paso 3 -> intervalos
  x = x + 1;
} while (x <= 10);

document.write("-------------------------------------------------- <br> <br>");

//CONTROLA CICLO FOR DINAMICAMENTE
var inicio = parseInt(prompt("Digite el inicio del ciclo"));
var fin = parseInt(prompt("Digite el fin del ciclo"));
var intervalos = parseInt(prompt("Digite el valor del incremento"));

document.write("CICLO FOR <br>");
for (var i = inicio; i <= fin; i += intervalos) {
  document.write(i + " <br> ");
}

document.write("<br>");

document.write("CICLO WHILE <br> ");
while (inicio <= fin) {
  document.write(inicio + " <br> ");

  inicio += intervalos;
}

document.write("-------------------------------------------------- <br> <br>");

//TABLA DE MULTIPLICAR CON FOR
var num = parseInt(prompt("Ingrese número: "));

document.write("Tabla del " + num + " <br>");

for (let i = 1; i <= 10; i++) {
  document.write(num + " X " + i + " = " + num * i + " <br> ");
}

document.write("-------------------------------------------------- <br> <br>");

//PARAR CICLO CON ELECCION
//CONTAR Y ACUMULAR CON VARIABLES
let contarNum = 0;
let sumarNum = 0;

let parar = "si";
for (let i = 0; parar == "si"; i++) {
  var num = Number(prompt("Digite número:"));
  document.write("Número digitado: " + num + " <br> ");
  parar = prompt("¿Desea digitar un número? si/no");
  contarNum++;
  sumarNum += num;
}
document.write("<br>");
document.write("Total de números ingresados: " + contarNum + " <br> ");
document.write("Suma total de números ingresados: " + sumarNum + " <br> ");
document.write("<br>");
document.write("-------------------------------------------------- <br> <br>");

//SACAR EL PROMEDIO DE UN ALUMNO, INGRESANDO X NOTAS

let numNotas = parseInt(prompt("Digite la cantidad de notas a calificar"));
let sumNotas = 0;
for (let i = 1; i <= numNotas; i++) {
  let calificacion = Number(prompt("Digite calificacion 1.0 / 5.0"));
  if (calificacion < 1.0 || calificacion > 5.0) {
    alert("Nota ingresada no válida");
    i--;
  } else {
    document.write(i + " Nota" + ": " + calificacion + "<br>");
    sumNotas = sumNotas + calificacion;
  }
}

let promedio = sumNotas / numNotas;
document.write("<br>");
document.write("El promedio del alumno es: " + promedio + " <br> ");
document.write("<br>");

if (promedio < 3.0) {
  document.write("Perdió la materia");
}
