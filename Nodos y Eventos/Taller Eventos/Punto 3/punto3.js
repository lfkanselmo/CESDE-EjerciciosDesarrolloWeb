/*
, poner el evento click al botón (=) y modifica la clase sidebar del css, 
ponienle left: 0 para que salga el menu lateral o left: -200px para ocultar el menú lateral,  
el Botón de la (X) debes poner el evento click para poder ocultar el menú lateral
*/

let btnHamburger = document.querySelector(".openbtn");
let btnClose = document.querySelector(".closebtn");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector("#main");

btnHamburger.addEventListener("click",() => {
    sidebar.style.left = "0";
    main.style.left = "200px";
});

btnClose.addEventListener("click", () => {
    sidebar.style.left = "-200px";
    main.style.left = "0";
});