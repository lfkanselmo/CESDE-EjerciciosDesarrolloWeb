/*
8.	 Cree una función que pida el nombre del usuario, 
y por medio de otra función imprima el nombre y un mensaje que diga Bienvenido + nombre.
*/

function pedirNombre(){
    return prompt("Ingrese nombre");
}

function saludar(nombre){
    document.write(" <h1> Bievenido " + nombre + "</h1>");
}

let nom = pedirNombre();
saludar(nom);