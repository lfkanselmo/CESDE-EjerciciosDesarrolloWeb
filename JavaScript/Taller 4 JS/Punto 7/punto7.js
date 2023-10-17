/*
7.	Calcule el índice de masa muscular de una persona 
con la siguiente fórmula (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. 
imprima en pantalla lo siguiente: 
a.	 Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
b.	Si el IMC es 18.5—24.9 : Normal
c.	Si el IMC es 25.0—29.9 : Sobrepeso 
d.	Si el IMC es 30.0 o más : Obeso debe ir al nutricionista
*/

function imc(altura, peso) {
    return peso / (altura * altura);
}

function showImc(imc) {

    document.write("IMC " + imc.toFixed(1) + "<br>");
    switch (true) {
        case imc < 18.5:
            document.write("Bajo peso debe ir al nutricionista");
            break;

        case imc >= 18.5 && imc < 25:
            document.write("Normal");
            break;

        case imc >= 25 && imc < 30:
            document.write("Sobrepeso");
            break;

        case imc >= 30:
            document.write("Obeso debe ir al nutricionista");
            break;
    }
}

let peso = Number(prompt("Ingrese su peso en kg"));
let altura = Number(prompt("Ingrese su altura en m"));

let imcResult = imc(altura, peso);
showImc(imcResult);