let campoTexto = document.querySelector(".campoTexto");
let btnAgregar = document.querySelector(".botonAgregar");
let tabla = document.querySelector(".table");
let btnGuardar = document.querySelector(".botonGuardar")
let textTarea;


btnAgregar.addEventListener("click", () => {
    crearTarea();
});

btnGuardar.addEventListener("click", ()=>{
    editar(textTarea);
});

campoTexto.addEventListener("keydown", (tecla) => {
    
    if (tecla.key === "Enter" && btnAgregar.classList.contains("activo")) {
        crearTarea();
    }

    if (tecla.key === "Enter" && btnGuardar.classList.contains("activo")) {
        editar(textTarea);
    }
});

function crearTarea() {
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

function editarTarea(btn){
    let tarea = btn.parentElement.parentElement;
    textTarea = tarea.firstElementChild;
    btnAgregar.classList.add("ocultarBoton");
    btnAgregar.classList.remove("activo");
    btnGuardar.classList.remove("ocultarBoton");
    btnGuardar.classList.add("activo");
    campoTexto.focus();
}

function editar (textTareaParameter){
    let sinEspacios = campoTexto.value.trim();
if (sinEspacios !== "") {
    textTareaParameter.textContent = sinEspacios;
} else{
    alert("No se puede modificar una tarea para ponerla vacía");
}

btnAgregar.classList.remove("ocultarBoton");
btnAgregar.classList.add("activo");
btnGuardar.classList.add("ocultarBoton");
btnGuardar.classList.remove("activo");
campoTexto.value = "";    
};

function eliminarTarea(btn) {
    let confirmar = confirm("¿Desea eliminar la tarea?");
    if (confirmar) {
        btn.parentElement.parentElement.remove();
    }
}