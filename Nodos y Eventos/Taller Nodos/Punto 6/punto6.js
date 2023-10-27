
/*
agregue un ítem que tenga como texto “Recoger a los niños” después del item “hacer mercado”; 
cree en css 2 clases con nombre cumplido y fallido, 
en cumplido agregue como estilo color de fondo verde y en fallido color de fondo rojo, 
agregue la clase cumplido a los ítems ”desayunar, 
hacer almuerzo y recoger a los niños”, y la clase fallido agregarla a los ítems “ir al banco”.
*/

// Punto 6

let item1 = document.createElement("li");
item1.innerText = "Recoger a los niños";
let item2 = document.createElement("li");
item2.innerText = "Hacer mercado";


let listaTareas = document.querySelector("ol");
listaTareas.appendChild(item1,item2);

let tareas2 = document.querySelectorAll("li");

tareas2.forEach((p) => {
    if(p.innerText === "Desayunar" || 
    p.innerText === "Preparar el almuerzo" || 
    p.innerText === "Recoger a los niños"){
        p.classList.add("cumplido");
    }

    if(p.innerText === "Ir al banco"){
        p.classList.add("fallido");
    }
    
});

