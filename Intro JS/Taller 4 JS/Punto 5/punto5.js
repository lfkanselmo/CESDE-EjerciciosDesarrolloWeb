/*
5.	Muestra todas las operaciones básicas(suma, resta, multi, división), 
pidiendo al usuario 2 números por medio de una función. 
*/

function operaciones(num1, num2){
    document.write("<h2> Suma:  </h2> " + num1 + " + " + num2 + " = " + (num1 + num2));
    document.write("<h2> Resta:  </h2> " + num1 + " - " + num2 + " = " + (num1 - num2));
    document.write("<h2> Multiplicación:  </h2> " + num1 + " * " + num2 + " = " + (num1 * num2));
    if(num2 == 0){
        document.write(" <h2> NO SE PUEDE DIVIDIR POR CERO </h2>")
    }else{
        document.write("<h2> Divisón:  </h2> " + num1 + " / " + num2 + " = " + (num1 / num2).toFixed(2));
    }
}

let num1 = Number(prompt("Ingrese el número 1"));
let num2 = Number(prompt("Ingrese el número 2"));

operaciones(num1, num2);