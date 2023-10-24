let titulo = document.querySelector("h1");

// para agregar una clase a una etiqueta
titulo.classList.add("color");
// para quitar una clase a una etiqueta
titulo.classList.remove("color");
// agregar o eliminar una clase de una etiqueta
titulo.classList.toggle("color");
// comprobar si existe la clase en la etiqueta
console.log(titulo.classList.contains("letra"));
// para reemplazar una clase de una etiqueta
titulo.classList.replace("color", "letra");