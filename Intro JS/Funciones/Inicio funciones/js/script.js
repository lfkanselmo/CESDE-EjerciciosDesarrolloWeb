/*

//crear la funcion
function saludar(nombre) {
  return "Hola " + nombre;
}

let nomb = prompt("Ingrese el nombre a mostrar");
//llamar la funcion
document.write(saludar(nomb));


function suma(n1, n2) {
  return n1 + n2;
}

n1 = Number(prompt("Ingrese el número 1"));
n2 = Number(prompt("Ingrese el número 2"));
let resultado = suma(n1, n2).toFixed(1);
alert("El resultado de la suma es: " + resultado);



function operaciones(a, b, c) {
  let result;

  if (c == "+") {
    result = a + b;
  } else if (c == "-") {
    result = a - b;
  } else if (c == "*") {
    result = a * b;
  } else if (c == "/" || c == "%") {
    if (b == 0) {
      alert("División indeterminada, no es posible dividir entre cero");
      result = 0;
    } else {
      result = a / b;
    }
  } else {
    result = "Operación no válida";
  }

  return result;
}

//Ejecutar funcion
var num1 = Number(prompt("Ingrese número"));
var num2 = Number(prompt("Ingrese otro número"));
var signo = prompt("Ingrese caracter de la operacion deseada  +  -  *  /  % ");

let resultado = operaciones(num1, num2, signo);

document.write(num1 + " " + signo + " " + num2 + " = " + resultado);


//funcion 1
function saludar(nombre) {
  return "Hola " + nombre + "<br>";
}

//funcion 2
function pedirNombres(cantidad) {
  for (let i = 1; i <= cantidad; i++) {
    let nombre = prompt("Ingrese el nombre #" + i);
    document.write(saludar(nombre));
  }
}

var n = parseInt(prompt("Ingrese la cantidad de nombres que desea saludar"));

pedirNombres(n);
*/

//funcion 1
function productos(cantidad) {
  let precioFinal = 0;
  for (let i = 1; i <= cantidad; i++) {
    var nombrePro = prompt("Nombre del producto #" + i);
    var precioPro = Number(prompt("Precio del producto #" + i));
    var cantidadPro = Number(prompt("Cantidad a comprar"));
    var total = precioPro * cantidadPro;
    document.write(
      nombrePro +
        "  ->  " +
        precioPro +
        " * " +
        cantidadPro +
        " = " +
        total +
        "<br>"
    );

    precioFinal += total;
  }

  return precioFinal;
}

//funcion 2
function calcularIVA(valor) {
  let iva = valor * 0.19;

  document.write("---------------------------------------------- <br>");
  document.write("El precio de la compra es de: " + valor + "<br>");
  document.write("IVA: " + iva + "<br>");
  document.write("---------------------------------------------- <br>");
  document.write("Total a pagar: " + (valor + iva) + "<br>");
}

let n = parseInt(prompt("Ingrese la cantidad de productos que desea ingresar"));

calcularIVA(productos(n));
