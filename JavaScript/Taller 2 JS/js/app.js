let punto = "";
let salida = "";

function limpiar() {
    const respuesta = document.querySelector("#respu");
    respuesta.value = "";
}

function punto1() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 1: Pide al usuario un número y determina si es par o impar y si es positivo o negativo.";
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

    salida = "El número " + num + " es: " + par + "\n" + posi;

    respuesta.value = salida;
}

function punto2() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Pide al usuario dos números y determina cual es el número mayor y cual es el menor.";
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));

    if (num1 == num2) {
        salida = "Los números son iguales";
    } else if (num1 > num2) {
        salida =
            "El número " +
            num1 +
            " es el mayor" +
            "\n" +
            "El número " +
            num2 +
            " es el menor";
    } else {
        salida =
            "El número " +
            num2 +
            " es mayor" +
            "\n" +
            "El número " +
            num1 +
            " es el menor";
    }

    respuesta.value = salida;
}

function punto3() {
    const respuesta = document.querySelector("#respu");
    punto =
        "3.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber cuál es el dia de la semana correspondiente al número digitado";

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
    punto =
        "Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. (Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor)";
    let age = parseInt(prompt("Ingrese su edad"));

    if (age < 18) {
        salida = "Usted es adolescente";
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
    punto =
        "Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente " +
        "si paga en efectivo paga el valor total. " +
        "si paga con cupón realice un 3% de descuento " +
        "si paga a crédito aumente el 5% al total.";

    let sum = 0;

    for (let i = 0; i < 3; i++) {
        let valor = Number(prompt("Ingrese valor de producto " + (i + 1)));
        sum = sum + valor;
    }

    let opc = 0;

    let exit = true;

    do {
        opc = parseInt(
            prompt(
                "Ingrese la opción de pago deseada: " +
                "\n" +
                "1. Efectivo" +
                "\n" +
                "2. Con cupón" +
                "\n" +
                "3. Crédito"
            )
        );

        if (opc != 1 && opc != 2 && opc != 3) {
            alert("Valor ingresado no válido");
            exit = true;
        } else {
            exit = false;
        }
    } while (exit);

    switch (opc) {
        case 1:
            salida = "Total de productos: " + sum;
            break;

        case 2:
            let descuen = sum * 0.03;
            salida =
                "Total de productos: " +
                sum +
                "\n" +
                "Valor a pagar: " +
                (sum - descuen);
            break;

        case 3:
            let aument = sum * 0.05;
            salida =
                "Total de productos: " +
                sum +
                "\n" +
                "Valor a pagar: " +
                (sum + aument);
            break;
    }

    respuesta.value = salida;
}

function punto6() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumno según su promedio";

    let notas = new Array(3);
    let sum = 0;

    for (let i = 0; i < notas.length; i++) {
        let num = Number(prompt("Ingrese la nota " + (i + 1)));

        if (num < 1 || num > 5) {
            alert("Nota ingresada no válida");
            i--;
        } else {
            notas[i] = num;
            sum = sum + num;
        }
    }

    let promedio = sum / notas.length;
    let nivel;

    switch (true) {
        case promedio < 2.0:
            nivel = "Malo";
            break;

        case promedio >= 2.0 && promedio <= 2.9:
            nivel = "Debe recuperar";
            break;

        case promedio >= 3.0 && promedio <= 3.9:
            nivel = "Regular";
            break;

        case promedio >= 4.0 && promedio <= 4.4:
            nivel = "Bueno";
            break;

        case promedio >= 4.5 && promedio <= 5.0:
            nivel = "Muy bueno";
            break;
    }

    salida =
        punto +
        "\n" +
        "\n" +
        "1 Nota: " +
        notas[0] +
        "\n" +
        "3 Nota: " +
        notas[1] +
        "\n" +
        "2 Nota: " +
        notas[2] +
        "\n" +
        "\n" +
        "Promedio: " +
        promedio +
        "\n" +
        "Nivel: " +
        nivel;

    respuesta.value = salida;
}

function punto7() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Calcula la edad actual de una persona a partir de su fecha de nacimiento. Los datos a pedir son: día, mes y año de nacimiento.";

    // Pedir al usuario que ingrese su fecha de nacimiento en el formato "AAAA-MM-DD"
    let fechaNacimientoString = prompt(
        "Por favor, ingresa tu fecha de nacimiento en el formato AAAA-MM-DD:"
    );

    // Convertir la cadena de fecha de nacimiento a un objeto Date
    let fechaNacimiento = new Date(fechaNacimientoString);

    //  Variable final para la edad
    let edad;

    // Verificar si la entrada del usuario es una fecha válida
    if (isNaN(fechaNacimiento)) {
        alert("Fecha de nacimiento inválida");
    } else {
        // Fecha actual
        let fechaActual = new Date();


        let edadEnMilisegundos = fechaActual - fechaNacimiento;


        let milisegundosEnUnAnio = 1000 * 60 * 60 * 24 * 365.25; // Aproximadamente 365.25 días por año para tener en cuenta años bisiestos
        edad = edadEnMilisegundos / milisegundosEnUnAnio;

        // Redondea la edad a un número entero
        edad = Math.floor(edad);

    }

    salida =
        punto +
        "\n" +
        "\n" +
        "Edad: " +
        edad;

    respuesta.value = salida;
}

function punto8() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero ";

        let edad = parseInt(prompt("Ingrese edad: "));
        let dias = parseInt(prompt("Ingrese la cantidad de días hospitalizado: "));

        let datos;
        let pagoTotal = 0;
        let sobreCosto = 0;

        switch(true){
            case edad >= 0 && edad <= 10:
                datos = costoDia(dias);
                pagoTotal = datos[0];
                if(datos[1] == 25000){
                    sobreCosto = pagoTotal * 0.05;
                } else if (datos[1] == 15000){
                    sobreCosto = pagoTotal * 0.1;                    
                }

                pagoTotal = pagoTotal + sobreCosto;

                break;

                case edad >= 11 && edad <= 17:
                datos = costoDia(dias);
                pagoTotal = datos[0];
                if (datos[1] == 15000){
                    sobreCosto = pagoTotal * 0.1;                    
                }

                pagoTotal = pagoTotal + sobreCosto;

                break;

                case edad >= 18 && edad <= 49:
                datos = costoDia(dias);
                pagoTotal = datos[0];
                if (datos[1] == 15000){
                    sobreCosto = pagoTotal * 0.15;                    
                }

                pagoTotal = pagoTotal + sobreCosto;

                break;

                case edad >= 50:
                datos = costoDia(dias);
                pagoTotal = datos[0];
                if(datos[1] == 25000){
                    sobreCosto = pagoTotal * 0.15;
                } else if (datos[1] == 15000){
                    sobreCosto = pagoTotal * 0.2;                    
                }

                pagoTotal = pagoTotal + sobreCosto;

                break;
        }


    salida =
        punto +
        "\n" +
        "\n" +
        "Días hospitalizado: " +
        dias + "\n" +
        "Valor del día: " + datos[1] + "\n" + 
        "Valor previo al recargo: " + (datos[1] * dias) + "\n" + 
        "Valor del recargo: " + sobreCosto + "\n" + 
        "Valor total: " + pagoTotal;

    respuesta.value = salida;
}

function costoDia(dias) {
    let dinero = 0;
    let valor = 0;

    switch (true) {
        case dias == 1:
            valor = 20000;
            dinero = dias * valor;
            break;

        case dias >= 2 && dias <= 4:
            valor = 30000;
            dinero = dias * valor;
            break;

        case dias >= 5 && dias <= 7:
            valor = 25000;
            dinero = dias * valor;
            break;

        case dias >= 8:
            valor = 15000;
            dinero = dias * valor;
            break;
    }

    let datos = [dinero, valor];

    return datos;

}
