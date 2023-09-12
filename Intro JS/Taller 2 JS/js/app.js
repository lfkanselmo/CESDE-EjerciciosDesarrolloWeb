let punto = "";
let salida = "";


function limpiar() {
    const respuesta = document.querySelector("#respu");
    respuesta.value = "";
}

function punto1() {
    const respuesta = document.querySelector("#respu");
    punto = "Punto 1: Pide al usuario un número y determina si es par o impar y si es positivo o negativo.";
    const num = parseFloat(prompt("Ingrese número"));
    let par = "";
    let posi = "";
    switch (true) {
        case num == 0:
            par = "ni par ni impar";
            posi = "ni positivo ni negativo";
            break;
        case num > 0 && num % 2 == 0:
            par = " es par";
            posi = " es positivo";
            break;
        case num < 0 && num % 2 == 0:
            par = " es par";
            posi = " es negativo";
            break;
        case num > 0 && num % 2 != 0:
            par = " es impar";
            posi = " es positivo";
            break;
        case num < 0 && num % 2 != 0:
            par = " es inpar";
            posi = " es negativo";
            break;

    }

    salida = "El número " + num + " es: " +
        par + "\n" +
        posi;

    respuesta.value = salida;
}

function punto2() {
    const respuesta = document.querySelector("#respu");
    punto = "Pide al usuario dos números y determina cual es el número mayor y cual es el menor.";
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));

    if (num1 == num2) {
        salida = "Los números son iguales";
    } else if (num1 > num2) {
        salida = "El número " + num1 + " es el mayor" + "\n"
            + "El número " + num2 + " es el menor";
    } else {
        salida = "El número " + num2 + " es mayor" + "\n"
            + "El número " + num1 + " es el menor";
    }

    respuesta.value = salida;
}

function punto3() {
    const respuesta = document.querySelector("#respu");
    punto = "3.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber cuál es el dia de la semana correspondiente al número digitado";

    let num = Number(prompt("Ingrese número de día"));

    switch (num) {
        case 1:
            salida = "Lunes";
            break;
        case 2:
            salida = "Tuesday";
            break;
        case 3:
            salida = "Miércoles";
            break;
        case 4:
            salida = "Jueves";
            break;
        case 5:
            salida = "Viernes";
            break;
        case 6:
            salida = "Sábado";
            break;
        case 7:
            salida = "Domingo";
            break;
        default:
            salida = "Número de día no válido";
            break;

    }


    respuesta.value = salida;
}

function punto4() {
    const respuesta = document.querySelector("#respu");
    punto = "Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. (Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor)";
    let age = parseInt(prompt("Ingrese su edad"));

    if (age < 18) {
        salida = "Usted es adolescente"
    } else if (age >= 18 && age <= 28) {
        salida = "Usted es adulto adolescente";
    } else if (age >= 29 && age <= 49) {
        salida = "Usted es adulto";
    } else {
        salida = "Usted es adulto mayor";
    }

    respuesta.value = salida;

}

function punto5() {
    const respuesta = document.querySelector("#respu");
    punto = "Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente "
        + "si paga en efectivo paga el valor total. "
        + "si paga con cupón realice un 3% de descuento "
        + "si paga a crédito aumente el 5% al total.";

    let sum = 0;

    for (let i = 0; i < 3; i++) {
        let valor = Number(prompt("Ingrese valor de producto " + (i + 1)));
        sum = sum + valor;
    }

    let opc = 0;

    let exit = true;
    opc = parseInt(prompt("Ingrese la opción de pago deseada: " + "\n" + "1. Efectivo" + "\n" + "2. Con cupón" + "\n" + "3. Crédito"));
    do {

        if (opc != 1 && opc != 2 && opc != 3) {
            alert("Valor ingresado no válido");
        } else {
            exit = true;
        }
    } while (exit);

    switch (opc) {
        case 1:
            salida = "Total de productos: " + sum;
            break;

        case 2:
            let descuen = sum * 0.03;
            salida = "Total de productos: " + sum + "\n"
                + "Valor a pagar: " + (sum - descuen);
            break;

        case 3:
            let aument = sum * 0.05;
            salida = "Total de productos: " + sum + "\n"
                + "Valor a pagar: " + (sum + aument);
            break;

    }

    respuesta.value = salida;
}

function punto6() {
    const respuesta = document.querySelector("#respu");
    punto = "Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de alumnos hombres y mujeres";

    let mujeres = parseInt(prompt("Ingrese la cantidad de mujeres: "));
    let hombres = parseInt(prompt("Ingrese la cantidad de hombres: "));
    let porMujeres = (mujeres * 100) / (mujeres + hombres);
    let porHombres = (hombres * 100) / (mujeres + hombres);

    salida = punto + "\n" + "\n" +
        "Total de estudiantes: " + (hombres + mujeres) + "\n" +
        "Porcentaje de mujeres: " + mujeres + "%" + "\n" +
        "Porcentaje de hombres: " + hombres + "%";

    respuesta.value = salida;
}

function punto7() {
    const respuesta = document.querySelector("#respu");
    punto = "Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.";
    let suma = 0.0;
    let notas = [3];

    for (let i = 0; i < 3; i++) {
        notas[i] = parseFloat(prompt("Ingrese nota " + (i + 1)));

        if (notas[i] > 5 || notas[i] < 1) {
            alert("nota ingresada no valida, rango de notas de 1 a 5");
            i--;
        } else {
            suma = suma + notas[i];
        }
    }

    salida = punto + "\n" + "\n" +
        "1 Nota: " + notas[0] + "\n" +
        "2 Nota: " + notas[1] + "\n" +
        "3 Nota: " + notas[2] + "\n" +
        "Promedio: " + (suma / notas.length);

    respuesta.value = salida;

}