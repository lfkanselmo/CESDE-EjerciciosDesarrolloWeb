/*
 calcular el salario a pagar de un empleado que gane x sueldo, descontando el 4% en salud y 5% en pensión 
*/

var nombre = prompt("Ingrese el nombre del empleado");
var salario = Number(prompt("Ingrese el salario del empleado"));

var pSalud = salario * 0.04;
var pPension = salario * 0.05;

var result = salario - pPension - pSalud;

document.write("<h1> Empleado: " + nombre + "</h1>");
document.write("<h6> Salario antes de los descuentos: " + salario + "</h6>");
document.write("<h6> Descuento por salud: " + pSalud + "</h6>");
document.write("<h6> Descuento por pension: " + pPension + "</h6>");
document.write("<h6> El salario final es del empleado es: " + result + "</h6>");
