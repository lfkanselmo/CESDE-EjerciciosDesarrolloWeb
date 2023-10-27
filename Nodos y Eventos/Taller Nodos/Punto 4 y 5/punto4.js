/*
modifique la etiqueta ol por ul (funcion replaceWith), agregue un atributo class con el nombre listado.
*/

// Punto 4

let listaOriginal = document.querySelector("ol");
let listaNueva = document.createElement("ul");
let tareas = document.querySelectorAll("li");

listaOriginal.replaceWith(listaNueva);
tareas.forEach((t)=>{
    listaNueva.appendChild(t);
});

/*
cree una clase en css con estilos para pintar el color, y cambiar la letra a cursiva, 
agregale la clase al elemento h2 desde Javascript y elimine el ítem “preparar almuerzo”.(función remove)
*/

// Punto 5

let titulo = document.querySelector("h2");
titulo.classList.add("color","cursiva");

let elemento = document.querySelector("ul > li:nth-last-child(1)");
elemento.remove();



