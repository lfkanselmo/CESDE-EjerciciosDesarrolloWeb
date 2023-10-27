/*
seleccionar las etiquetas p que tienen la clase ps y 
agregarles un color y un tamaño de letra desde Javascript. 
*/

let etiquetas = document.querySelectorAll(".ps");
etiquetas.forEach((t) => {
    t.style.color = "blue";
    t.style.fontSize = "50px";
});