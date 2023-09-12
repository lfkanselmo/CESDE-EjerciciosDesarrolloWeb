let punto = "";
let salida = "";


function limpiar(){
    const respuesta = document.querySelector("#respu");
    respuesta.value = "";
}

function punto1(){
    const respuesta = document.querySelector("#respu");
    punto = "Punto 1: Realiza el cálculo del salario que debe recibir un trabajador que gana x salario con un descuento del 4% por salud y 7% por pensión";
    const salario = parseFloat(prompt("Ingrese el salario del trabajador"));
    const salud = salario * 0.04;
    const pension = salario * 0.07;


    let finalSalario = salario - salud - pension;

    salida = punto + "\n" + "\n" +
    "Salario inicial: " + salario + "\n" + 
    "Salud: " + salud + "\n" +
    "Pensión: " + pension + "\n" +
    "Salario final: " + finalSalario;

    respuesta.value = salida;
}

function punto2(){
    const respuesta = document.querySelector("#respu");
    punto = "Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones base y altura se deben pedir al usuario que las digite.";
    let base = parseFloat(prompt("Ingrese la longitud de la base"));
    let altura = parseFloat(prompt("Ingrese la longitud de la altura"));
    let area = (base*altura) / 2;

    salida = punto + "\n" + "\n" +
    "La base del triangulo es: " + base + "\n" +
    "La altura del triangulo es: " + altura + "\n" +
    "El area total del triangulo es: " + area;

    respuesta.value = salida;
}

function punto3(){
    const respuesta = document.querySelector("#respu");
    punto = "Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo 2 números al usuario.";

    let num1 = parseInt(prompt("Ingrese primer número: "));
    let num2 = parseInt(prompt("Ingrese segundo número: "));

    let suma = num1 + num2;
    let resta = num1 - num2;
    let producto = num1 * num2;
    let division = 0;
    let modulo = num1 % num2;
    let indete = "";
    
    if (num2 != 0) {
        division = num1 / num2;
    } else {
        indete = " Valor indeterminado. No es posible dividir entre cero";
    }

    salida = punto + "\n" + "\n" +
    "1 Número: " + num1 + "\n" + 
    "2 Número: " + num2 + "\n" + 
    "Suma: " + suma + "\n" +
    "Resta: " + resta + "\n" +
    "Multiplicación: " + producto + "\n" +
    "División: " + division + " " + indete +  "\n" + 
    "Modulo: " + modulo;

    respuesta.value = salida;
}

function punto4(){
    const respuesta = document.querySelector("#respu");
    punto = "Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en el mes y el valor tanto como de las horas normales de trabajo y las horas extras.";
    let horasTrabajo = parseInt(prompt("Ingrese el total de horas trabajadas este mes"));
    let horasExtra = parseInt(prompt("Ingrese cuantas de esas horas son extras"));
    let precioHora = parseInt(prompt("Ingrese el valor de la hora normal de trabajo"));
    let precioExtra = parseInt(prompt("Ingrese el valor de la hora extra"));

    let sueldo = ((horasTrabajo - horasExtra) * precioHora) + (horasExtra * precioExtra);

    salida = punto + "\n" + "\n" +
    "Cantidad horas normales trabajadas: " + (horasTrabajo - horasExtra) + ". Se pagan a: " + precioHora + "\n" +
    "Cantidad horas extras trabajadas: " + horasExtra + ". Se pagan a: " + precioExtra + "\n" + 
    "Sueldo mensual: " + sueldo;

    respuesta. value = salida;

}

function punto5(){
    const respuesta = document.querySelector("#respu");
    punto = "Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar.";
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    let precioIVA = precio * 0.19;

    salida = punto + "\n" + "\n" +
    "El precio del producto sin IVA es: " + precio + "\n" +
    "19% de IVA: " + precioIVA + "\n" +
    "Precio final: " + (precio + precioIVA);

    respuesta.value = salida;
}

function punto6(){
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

function punto7(){
    const respuesta = document.querySelector("#respu");
    punto = "Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.";
    let suma = 0.0;
    let notas = [3];

    for (let i = 0; i < 3; i++) {
        notas[i] = parseFloat(prompt("Ingrese nota " + (i+1)));

        if(notas[i] > 5 || notas[i] < 1){
            alert("nota ingresada no valida, rango de notas de 1 a 5");
            i--;
        }else{
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