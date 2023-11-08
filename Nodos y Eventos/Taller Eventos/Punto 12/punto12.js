let campoTexto = document.querySelector(".campoTexto");
let btnAgregar = document.querySelector(".botonAgregar");
let tabla = document.querySelector(".table");
let btnGuardar = document.querySelector(".botonGuardar")
let textTarea;

// Evento si se da click en el boton agregar
btnAgregar.addEventListener("click", () => {
    crearTarea();
});

// Evento si se da click en el boton guardar, botón que se agregó en HTML
btnGuardar.addEventListener("click", ()=>{
    editar(textTarea);
});

// cuando se da ENTER al escribir en el input de texto
campoTexto.addEventListener("keydown", (tecla) => {
    
    // Según cuál de los 2 botones esté activo, hace una acción distinta al dar ENTER
    
    if (tecla.key === "Enter" && btnAgregar.classList.contains("activo")) {
        crearTarea();
    }

    if (tecla.key === "Enter" && btnGuardar.classList.contains("activo")) {
        editar(textTarea);
    }
});

// Función para cerar tareas
function crearTarea() {
    // Quita los espacios a los lados del texto
    let sinEspacios = campoTexto.value.trim();
    if (sinEspacios != "") {
        let fila = document.createElement("tr");
        fila.innerHTML = `
    <td> ${campoTexto.value} </td>
    <td> <span onclick="editarTarea(this)"> 📝 </span> </td>
    <td> <span onclick="eliminarTarea(this)"> ❌ </span> </td>
    `;

        tabla.appendChild(fila);
        campoTexto.value = "";
    } else {
        alert("Tarea vacía")
    }
}

// Funcón para editar tareas ya existentes, se activa cuando se da click en el botón en forma de hoja y lapiz
function editarTarea(btn){
    let tarea = btn.parentElement.parentElement;
    textTarea = tarea.firstElementChild;

    //Cambia el estado de los botones, coloca el de guardar activo para que se vea y oculta el de agregar

    btnAgregar.classList.add("ocultarBoton");
    btnAgregar.classList.remove("activo");
    btnGuardar.classList.remove("ocultarBoton");
    btnGuardar.classList.add("activo");

    // Coloca el foco en el campo de texto para estar listo para escribir

    campoTexto.focus();
}

// Función que captura y pega el texto nuevo al editar una tarea, 
// recibe como parametro el texto de la tarea especifica a la que se le dió editar

function editar (textTareaParameter){
    // Quita los espacios a los lados del texto
    let sinEspacios = campoTexto.value.trim();
if (sinEspacios !== "") {
    // si el campo de texto no queda en blanco, se agrega el texto a la tarea
    textTareaParameter.textContent = sinEspacios;
} else{
    alert("No se puede modificar una tarea para ponerla vacía");
}

// se vuelve a activar el boton de agregar tarea y se desactiva el de guardar
btnAgregar.classList.remove("ocultarBoton");
btnAgregar.classList.add("activo");
btnGuardar.classList.add("ocultarBoton");
btnGuardar.classList.remove("activo");
// se limpia el input de texto
campoTexto.value = "";    
};


// funcion para eliminar tarea, se activa con el boton de X roja de cada tarea
function eliminarTarea(btn) {
    let confirmar = confirm("¿Desea eliminar la tarea?");
    if (confirmar) {
        btn.parentElement.parentElement.remove();
    }
}