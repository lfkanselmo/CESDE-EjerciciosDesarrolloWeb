/*
poner el evento change al listado para poder saber que sabor de helado se escogió
*/

let listado = document.querySelector(".nieve");
let resultado = document.querySelector(".resultado");
let p = document.createElement("p");

listado.addEventListener("change", (event) => {
    p.innerText = `Te gusta el sabor ${event.target.value}`;
    p.textContent = "Te gusta el sabor " + event.target.value;
    resultado.appendChild(p);
});