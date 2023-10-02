//Funciones integradas en arrays
var frutas = ["Mango", "Piña", "Banano", "Kiwi"];

frutas.push("Papaya"); //Agregar al final del array
frutas.unshift("Pera"); //Agregar al inicio del array

document.write("Frutas en el array: " + frutas + "<br>");
document.write("Total frutas: " + frutas.length + "<br> <br>");

frutas.pop(); //Elimina el último dato del array
frutas.shift(); //Elimina el primer dato del array

document.write("Frutas del medio: " + frutas.slice(1, 3) + "<br>"); //Selecciona elementos en el array en un rango especifico

document.write("Posición de la piña: " + frutas.indexOf("Piña") + "<br>"); //devuelve la posición del elemento buscado
document.write("¿Fresa está incluida?: " + frutas.includes("Fresa") + "<br>"); //Indica si el elemento buscado existe en el arreglo
document.write("Frutas en el array: " + frutas + "<br>");
document.write("Total frutas: " + frutas.length + "<br> <br>");

frutas.splice(2, 1); //Elimina elementos indicando la posición inicial y cuantos elementos a eliminar
document.write("Frutas en el array: " + frutas + "<br>");
frutas.splice(2, 0, "Lulo"); //Elimina elementos indicando la posición inicial y cuantos elementos a eliminar
document.write("Frutas en el array: " + frutas + "<br>");

frutas.sort(); //Organizar o desorganizar datos del array
document.write("Frutas en el array después de ordenar: " + frutas + "<br>");

frutas.reverse(); //Organizar o desorganizar datos del array
document.write("Frutas en el array: " + frutas + "<br> <br>");

//forEach para mostar todos los elementos del array
frutas.forEach((f) => {
  let pos = frutas.indexOf(f);
  document.write("Fruta " + pos + ": " + f + "<br>");
});
