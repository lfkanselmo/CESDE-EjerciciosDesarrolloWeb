let campoTexto = document.querySelector(".campoTexto");
let btnGuardar = document.querySelector(".boton");
let tabla = document.querySelector(".table");


btnGuardar.addEventListener("click", () => {
    crearTarea();
});

campoTexto.addEventListener("keydown", (tecla) => {
    if (tecla.key === "Enter") {
        crearTarea();
    }
});

function crearTarea() {
    let sinEspacios = campoTexto.value.trim();
    if (sinEspacios.value != "") {
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
    
}

function eliminarTarea(btn) {
    let confirmar = confirm("¿Desea eliminar la tarea?");
    if (confirmar) {
        btn.parentElement.parentElement.remove();
    }
}