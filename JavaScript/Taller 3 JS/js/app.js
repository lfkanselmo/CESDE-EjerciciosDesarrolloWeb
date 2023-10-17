let punto = "";

function limpiar() {
    const respuesta = document.querySelector("#respu");
    respuesta.value = "";
}

function punto1() {
    const respuesta = document.querySelector("#respu");
    let salida = "";
    punto =
        "Punto 1: Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.";

    let num = parseInt(prompt("Ingrese el número limite"));
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    salida =
        punto +
        "\n" +
        "\n" +
        "La suma de los primeros " +
        num +
        " números naturales es: " +
        sum;

    respuesta.value = salida;
}

function punto2() {
    const respuesta = document.querySelector("#respu");
    let salida = "";
    punto =
        "Punto 2: Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).";
    let estudiante = prompt("Ingrese el nombre del estudiante");
    let n = parseInt(
        prompt("Ingrese la cantidad de notas del estudiante " + estudiante)
    );
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let nota = Number(prompt("Ingrese la nota " + i));
        if (nota > 5 || nota < 1) {
            alert("Nota ingresada no válida, ingrese valor entre 1 y 5");
            i--;
        } else {
            sum += nota;
        }
    }
    let promedio = sum / n;
    let aprobado;
    if (promedio >= 3) {
        aprobado = "Aprobado";
    } else {
        aprobado = "Reprobado";
    }

    salida =
        punto +
        "\n" +
        "\n" +
        "El estudiante " +
        estudiante +
        " tiene un promedio de: " +
        promedio.toFixed(1) +
        "\n" +
        "El estudiante " +
        estudiante +
        " fue: " +
        aprobado;

    respuesta.value = salida;
}

function punto3() {
    const respuesta = document.querySelector("#respu");
    let salida = "";
    punto =
        "Punto 3: Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.";

    let suma = 0;
    let contador = 0;
    let opc = "SI";
    let num;

    while (opc !== "FIN") {
        num = parseInt(prompt("Ingrese número"));
        suma += num;
        contador++;

        opc = prompt(
            "Ingrese la palabra FIN para terminar el ingreso de números"
        ).toUpperCase();
    }



    salida =
        punto +
        "\n" +
        "\n" +
        "Se ingresaron  " +
        contador +
        " números en total..." +
        "\n" +
        "El resultado de la suma de los números ingresados es: " +
        suma;

    respuesta.value = salida;
}

function punto4() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 4:	realice una tabla de multiplicar con cualquier número ingresado hasta el 30.";

        let salida = punto + "\n" + "\n";
    let num = parseInt(
        prompt("Ingrese número para generar tabla de multiplicar")
    );

    for (let i = 0; i <= 30; i++) {
        salida = salida + num + " * " + i + " = " + num * i + "\n";
    }

    respuesta.value = salida;
}

function punto5() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 5:	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.";

        let salida = punto + "\n" + "\n";

    let num = parseInt(
        prompt("Ingrese número para generar tabla de multiplicar")
    );

    for (let i = 10; i >= 0; i--) {
        salida = salida + num + " * " + i + " = " + num * i + "\n";
    }

    respuesta.value = salida;
}

function punto6() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.";

        let salida = punto + "\n" + "\n";

    let numInter = parseInt(prompt("Ingrese número de intervalo"));

    for (let i = 0; i <= 30; i += numInter) {
        if (i != 0) {
            salida = salida + i + "\n";
        }
    }

    respuesta.value = salida;
}

function punto7() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 7:	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva";
        let salida = punto + "\n" + "\n";

    let numInter = parseInt(prompt("Ingrese número de intervalo"));

    for (let i = 30; i >= 1; i -= numInter) {
        salida = salida + i + "\n";
    }

    respuesta.value = salida;
}

function punto8() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 8:	Digite un número (altura) y a partir de él cree una escalera de asteriscos o el carácter que desee";

        let salida = punto + "\n" + "\n";

    let altura = parseInt(prompt("Ingrese la altura"));

    for (let i = 1; i <= altura; i++) {
        for (let j = 1; j <= i; j++) {
            salida = salida + " * ";
        }
        salida = salida + "\n";
    }

    respuesta.value = salida;
}

function punto9() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 9: Digite un número (altura) y a partir de él cree una escalera invertida de asteriscos o el carácter que desee";

        let salida = punto + "\n" + "\n";

    let altura = parseInt(prompt("Ingrese la altura"));

    for (let i = altura; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            salida = salida + " * ";
        }
        salida = salida + "\n";
    }

    respuesta.value = salida;
}

function punto10() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 10:	Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.";

        let salida = punto + "\n" + "\n";

    let numCompras = parseInt(prompt("Ingrese la cantidad de compras"));
    let numProdu;
    let produPrecio;
    let suma = 0;
    let totalGeneral = 0;

    for (let i = 1; i <= numCompras; i++) {
        suma = 0;
        salida = salida + "Cliente #" + i + "\n";
        numProdu = parseInt(
            prompt("Ingrese la cantidad de productos del cliente " + i)
        );
        salida = salida + "No. Productos: " + numProdu + "\n";
        for (let j = 1; j <= numProdu; j++) {
            produPrecio = Number(
                prompt(
                    "Ingrese precio producto " + j + " de la compra del cliente #" + i
                )
            );
            if (produPrecio > 0) {
                salida = salida + "Valor p" + j + ": " + produPrecio + "\n";
                suma += produPrecio;
            } else {
                alert("Precio de producto no válido");
                j--;
            }
        }
        salida = salida + "Total compra: " + suma + "\n" + "\n";
        totalGeneral += suma;
    }

    salida = salida + "Total general del día: " + totalGeneral;

    respuesta.value = salida;
}

function punto11() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 11:	Cree un programa que calcule el promedio de 3 notas para 3 alumnos";

        let salida = punto + "\n" + "\n";

        let n = 3;
    let estudiante;
    let materia;
    let nota;
    let promedio;
    let suma;

    for (let i = 1; i <= n; i++) {
        suma = 0;
        estudiante = prompt("Ingrese nombre del estudiante " + i);
        salida = salida + "Nombre de alumno #" + i + " " + estudiante + "\n";
        materia = prompt("Ingrese nombre de la materia: ")
        salida = salida + "Materia: " + materia + "\n";
        for (let j = 1; j <= n; j++) {
            nota = Number(
                prompt("Ingrese nota " + j + " del estudiante " + estudiante)
            );
            if (nota > 0 && nota <= 5) {
                salida = salida + "Nota " + j + ": " + nota + "\n";
                suma += nota;
            } else {
                alert("Nota no válida");
                j--;
            }
        }
        salida = salida + "Promedio: " + (suma/n).toFixed(1) + "\n" + "\n";
    }

    respuesta.value = salida;
}

function punto12() {
    const respuesta = document.querySelector("#respu");
    punto =
        "Punto 12:	Cree tabla de números del 1 al 15 mínimo en HTML";
        let salida = punto + "\n" + "\n";

        var row = parseInt(prompt("Digite la cantidad de filas"));
        var col = parseInt(prompt("Digite la cantidad de columnas"));
        var x = 1;
        var num = 1;
        
        document.write("<table border= '1'>");
        
        while ( x <= row){
            document.write("<tr>");
            var y =1;
            while(y <= col){
                document.write("<td>");
                if(num < 10){
                    document.write("0"+num++);
                } else {
                    document.write(num++);
                }
                document.write("</td>");
                y++
            }
            document.write("</tr>");
            x++
        }
        document.write("</table>");

    respuesta.value = salida;
}

function punto13() {
    const respuesta = document.querySelector("#respu");
    punto ="Punto 13:	Cree un programa que pida la edad a 10 estudiantes y determine cuántos son menores de edad y cuales son mayores de edad";

    let salida = punto + "\n" + "\n";

    let cMayores = 0;
    let cMenores = 0;

    for (let i = 1; i <= 10; i++) {
        let edad = parseInt(prompt("Ingrese la edad del estudiante " + i));
        salida = salida + i + " Estudiante: " + edad + "\n";

        if(edad >= 18){
            cMayores++;
        } else {
            cMenores++;
        }
    }

    salida = salida + "\n" + "Cantidad de mayores de edad: " + cMayores + "\n";
    salida = salida + "Cantidad de menores de edad: " + cMenores;

    respuesta.value = salida;
}

function punto14() {
    const respuesta = document.querySelector("#respu");
    punto ="Punto 14: Utiliza la función Math.random() para generar un número aleatorio y compararlo con el que el usuario digite. tienes 3 intentos para acertar.";

    let salida = punto + "\n" + "\n";

    let numAleat = Math.round(Math.random() * 5);
    let intentos = 3;

    for (let i = 1; i <= 3; i++) {
        let numAdivinado = parseInt(prompt("Ingrese número a adivinar entre 0 y 5")); 

        salida = salida  + "Número " + i + ": " + numAdivinado + "\n";
        
        if(numAdivinado == numAleat){
           salida = salida + "¡¡¡Acertaste!!!" + "\n";
            break;
        } else {
            salida = salida  + "Fallaste, sigue intentado..." + "\n";
            intentos--;
            salida = salida + "Te quedan " + intentos + " intentos" + "\n" + "\n";
        }
    }

    salida = salida + "El número era: " + numAleat;
    

        

    respuesta.value = salida;
}
