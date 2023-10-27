/*
con el evento scroll hacer que 
el menú al bajar cambie de color de fondo y 
al subir quede con el mismo color que tenia anteriormente 
*/

let menu = document.querySelector("div");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        menu.style.backgroundColor = "beige";
        menu.style.color = "black";
    } else{
        menu.style.backgroundColor = "black";
        menu.style.color = "white";
    }
});