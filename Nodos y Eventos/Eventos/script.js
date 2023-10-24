let span = document.querySelector("span");
let p = document.querySelector("p");


// eventos funcionales
span.onmouseover = function cambiarTexto(){
    this.textContent = "Todo bien";
}

span.onmouseout = function volverTexto(){
    this.textContent = "Pase el mouse por aquí";
}

function cambiarColor(){
    this.style.color = "red";
    this.textContent = "Dar doble click";
}

function volverColor(){
    this.style.color = "black";
    this.textContent = "Dar click aquí"
}

// eventos con manejador de eventos addEventListener
p.addEventListener("click", cambiarColor);
p.addEventListener("dblclick", volverColor);