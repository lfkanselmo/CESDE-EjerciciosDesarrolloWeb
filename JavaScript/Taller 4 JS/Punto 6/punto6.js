/*
6.	Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a 
Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis.

*/

function celsiusToFaren(grados) {
    return (grados * (9 / 5)) + 32;
}

function farenToCelsius(grados) {
    return (grados - 32) * (5 / 9);
}

let opc = prompt("Ingrese el tipo de temperatura de entrada. C para celsius, F para Fahrenheit").toUpperCase();
let grados;

switch (opc) {
    case "C":
        grados = Number(prompt("Ingrese la cantidad de grados celsius a convertir a fahrenheit"));
        if (isNaN(grados)) {
            document.write("Valor de temperatura no válida");
        } else {
            document.write(grados + "<h2> Celsius a Fahrenheit: </h2>");
            document.write(celsiusToFaren(grados).toFixed(2));
            document.write("------------------------------------------------------------");
            switch (true) {
                case grados <= 4:
                    document.write(" <h2> Nos congelamos </h2> ");
                    break;

                case grados >= 5 && grados <= 15:
                    document.write(" <h2> Está haciendo frío </h2> ");
                    break;
                case grados >= 16 && grados <= 25:
                    document.write(" <h2> Está templado el día </h2> ");
                    break;
                case grados >= 26:
                    document.write(" <h2> Tiene fiebre o es el Apocalipsis </h2> ");
                    break;

            }
        }

        break;

    case "F":
        grados = Number(prompt("Ingrese la cantidad de grados fahrenheit a convertir a celsius"));
        if (isNaN(grados)) {
            document.write("Valor de temperatura no válida");
        } else {
            document.write(grados + "<h2> Fahrenheit a Celsius: </h2>");
            document.write(farenToCelsius(grados).toFixed(2));
            document.write("------------------------------------------------------------");
            switch (true) {
                case grados <= 39.2:
                    document.write(" <h2> Nos congelamos </h2> ");
                    break;

                case grados >= 33 && grados <= 50:
                    document.write(" <h2> Está haciendo frío </h2> ");
                    break;
                case grados >= 51 && grados <= 77:
                    document.write(" <h2> Está templado el día </h2> ");
                    break;
                case grados >= 78:
                    document.write(" <h2> Tiene fiebre o es el Apocalipsis </h2> ");
                    break;

            }
        }

        break;

    default:
        document.write("Tipo de temperatura seleccionada no válida");
        break;
}