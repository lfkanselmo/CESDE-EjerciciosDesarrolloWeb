/*
2.	Llene un array con mínimo 5 números al azar ingresandolos por el navegador, 
y muestre cual es el mayor, cuál es el menor y el promedio de los números ingresados.
*/

let numeros = [];

let n = 2;
let siguiente = true;

let num = Number(prompt("Ingrese número"));
numeros.push(num);

let mayor = num;
let menor = num;

let promedio = 0;
let sum = num;

while(siguiente == true){
    num = Number(prompt("Ingrese número"));
    numeros.push(num);

    if(mayor < num){
        mayor = num;
    }

    if(menor > num){
        menor = num;
    }

    sum += num;
    n++;
    if(n>5){
        let res = prompt("¿Desea seguir ingresando números? S para confirmar").toUpperCase();
        if(res != "S"){
            siguiente = false;
        }
    }
}

promedio = sum / numeros.length;

document.write("Los números guardados son: <br>");
numeros.forEach(number => {
    document.write(number + "<br>");
});

document.write("El promedio es: " + promedio + "<br>");
document.write("El mayor es: " + mayor + "<br>");
document.write("El menor es: " + menor + "<br>");