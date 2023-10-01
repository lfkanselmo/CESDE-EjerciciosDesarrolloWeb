/*
4.	Crea una función donde pases como parámetro un nombre y 
muéstralo en el navegador; Validar que el dato ingresado no sea un número, 
de ser así se debe decir en pantalla ingrese un nombre válido. 
(lo puedes hacer con la función isNaN(), investiga cómo funciona)
*/

function mostrarNombre(nombre){
    if(isNaN(nombre) == true && /[0-9]/.test(nombre) == false){
        return "El nombre es: " + nombre;
    }

    return "Ingrese un nombre valido";
}

let nom = prompt("Ingrese el nombre a mostrar: ");

document.write(mostrarNombre(nom));