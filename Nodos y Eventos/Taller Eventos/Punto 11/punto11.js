/*
con el evento load hacer que aparezca un icono que simula que
la pagina esta cargando y después de 3 segundos debe desaparecer
*/

let img = document.querySelector(".imagenCarga");
let contenedor = document.querySelector(".container");

window.addEventListener("load", ()=>{
    setTimeout(() => {
        img.style.display = "none";
        contenedor.style.display = "block";
    }, 3000)
});
