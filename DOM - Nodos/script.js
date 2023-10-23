// SELECCIONAR ETIQUETA

/*

// selección por nombre de etiqueta

let titulo = document.querySelector("h1");
titulo.textContent = "Titulo por nombre";
titulo.style.color = "red";
console.log(titulo);

// seleción por nombre de clase

let classTitulo = document.querySelector(".titulo");
classTitulo.textContent = "Titulo por .Clase";
classTitulo.style.color = "green";
console.log(classTitulo);

// seleción por nombre de id

let idTitulo = document.querySelector("#titulo");
idTitulo.textContent = "Titulo por #ID";
idTitulo.style.color = "salmon";
idTitulo.style.backgroundColor = "beige";
console.log(idTitulo);



// seleción de una etiqueta dentro de otra
let numero = document.querySelector(".titulo > span");
numero.style.fontSize = "50px";
numero.style.color = "blue";


// SELECCIONAR VARIAS ETIQUETAS

let ps = document.querySelectorAll("p");

ps.forEach((p) => {
    p.style.color = "blue";
    console.log(p.textContent);
});

*/

// CREAR ETIQUETAS  -> createElement()
let enlace = document.createElement("a");
enlace.href = "https://www.youtube.com/";
enlace.setAttribute("href","https://www.youtube.com/");
enlace.setAttribute("target","blank");

// agregar etiqueta a HTML
 let body = document.body;
body.appendChild(enlace);

// forma corta de agregar texto
enlace.textContent = "Ir a YouTube";


// forma larga de agregar texto
let texto = document.createTextNode("Ir a YouTube");
// agregar el texto a la etiqueta
enlace.appendChild(texto);

let ps = document.querySelectorAll("p");

ps[0].insertAdjacentText("afterend",enlace);


// Reemplazar una etiqueta
let p = document.createElement("p");
p.appendChild(texto);
enlace.replaceWith(p);

ps[0].insertAdjacentElement("afterend", p);

// Eliminar etiqueta

p.remove();