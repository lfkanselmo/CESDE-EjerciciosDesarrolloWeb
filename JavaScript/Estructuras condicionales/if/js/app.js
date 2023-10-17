/*
    Si el empleado gana igual o menos a 1.200.000,
    descontar en salud 4% y pensión 5%.
    Si el empleado gana entre 1.200.001 a 2.000.000,
    descontar en salud 5% y pensión 6%
    Y si gana más de 2.00o.000 descontar salud 6% y pensión 7% 
*/

/*Datos de entrada*/
let salary = Number(prompt("Ingrese el salario del empleado: "));
let name = prompt("Ingrese el nombre del empleado");

/*Calculos*/
let health;
let pen;
let finalSalary;
let s = 0;
let p = 0;
if (salary <= 1200000) {
  s = 0.04;
  p = 0.05;
} else if (salary >= 1200001 && salary <= 2000000) {
  s = 0.05;
  p = 0.06;
} else {
  s = 0.06;
  p = 0.07;
}

health = salary * s;
pen = salary * p;
finalSalary = salary - (health + pen);

document.write(
  "El empleado " +
    name +
    ": " +
    "<br>" +
    "El salario original es: " +
    salary +
    "<br>" +
    "El descuento por salud es: " +
    health +
    "<br>" +
    "El descuento por pensión es de: " +
    pen +
    "<br>" +
    "<h1> Sueldo final del trabajador es: " +
    finalSalary +
    "</h1>"
);
