/*
 poner el evento click al botón y la clase show de css para que pueda mostrarse el submenú
*/

let btn = document.querySelector(".dropbtn");

btn.addEventListener("click", () => {
let menu = document.querySelector(".dropdown-content");
menu.classList.toggle("show");
});