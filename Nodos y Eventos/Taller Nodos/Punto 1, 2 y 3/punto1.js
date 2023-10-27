// Punto 1

let h1 = document.createElement("h1");
h1.textContent = "My presentation";

let div = document.querySelector("div");
div.insertAdjacentElement("beforebegin", h1);

/*
cree una etiqueta p con el texto 
“my best friend is mickey” y ubicarla  después de la p que está dentro del div.
*/

// Punto 2

document.querySelector("div");
let pNueva = document.createElement("p");
pNueva.innerText = "my best friend is mickey";
div.insertAdjacentElement("beforeend",pNueva);

/*
seleccione el título (etiqueta h2), y agregue un color a la letra, 
también seleccione la última p y póngale una la letra en negrita y el color de fondo que desee. 
*/

// Punto 3

let titulo = document.querySelector("h2");
let ultimaP = document.querySelector("div > p:nth-last-child(1)");

titulo.style.color = "blue";
ultimaP.style.fontWeight = "bold";
ultimaP.style.color = "white";
ultimaP.style.backgroundColor = "#202020";