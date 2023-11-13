// Variables globales
let nombreInput = document.querySelector(".nombre");
let profesionInput = document.querySelector(".profesion");
let salarioInput = document.querySelector(".salario");
let buscarInput = document.querySelector(".buscar");
let btnGuardar = document.querySelector(".btn-guardar");
let btnActualizar = document.querySelector(".btn-actualizar");
let btnBuscar = document.querySelector(".btn-buscar");
let table = document.querySelector(".table tbody")
const variable = "profesiones";

// Actualizar el DOM
document.addEventListener("DOMContentLoaded", () => {
    limpiarTabla();
    traerElementos();
});

//Botón guardar
btnGuardar.addEventListener("click", () => {
    let datos = validarFormulario();
    if (datos != null) {
        guardarDatos(datos);
    }
    limpiarTabla();
    traerElementos();
});

// Evento input buscar
buscarInput.addEventListener("keyup", ()=>{
    let caracteres = buscarInput.value;
    buscarDato(caracteres);
});

// Data validation function
function validarFormulario() {
    let datosFormulario;
    if (nombreInput.value == "" ||
        profesionInput.value == "" ||
        salarioInput.value == "") {
        alert("Todos los campos del formulario son obligatorios");
    } else {
        datosFormulario = {
            "nombre": nombreInput.value,
            "profesion": profesionInput.value,
            "salario": salarioInput.value
        }
    }

    console.log(datosFormulario);
    nombreInput.value = "";
    profesionInput.value = "";
    salarioInput.value = "";

    return datosFormulario;
};


// Guardar en localStorage
function guardarDatos(datos) {

    let profesiones = [];
    let profesionesGuardadas = JSON.parse(localStorage.getItem(variable));
    if (profesionesGuardadas != null) {
        profesiones = profesionesGuardadas;
    }


    profesiones.push(datos);

    localStorage.setItem(variable, JSON.stringify(profesiones));
    alert("Trabajador guardado con éxito");
};


// Clean table function
function limpiarTabla() {
    let filas = document.querySelectorAll("table tbody tr");
    filas.forEach(fila => {
        fila.remove();
    });
}


// Extract data function
function traerElementos() {
    let profesiones = [];
    let profesionesGuardadas = JSON.parse(localStorage.getItem(variable));
    if (profesionesGuardadas != null) {
        profesiones = profesionesGuardadas;
    }

    profesiones.forEach((profesion, i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td> ${(i + 1)} </td>
            <td> ${profesion.nombre} </td>
            <td> ${profesion.profesion} </td>
            <td> ${profesion.salario} </td>
            <td>
                <span class="btn-editar btn btn-warning" onclick= "actualizarDatos(${i})" > 📝 </span> 
                <span class="btn-borrar btn btn-danger" onclick= "borrarDatos(${i})" > ❌ </span> 
            </td>        
        `;
        table.appendChild(fila);
    });
};


// Borrar trabajador
function borrarDatos(pos) {
    let profesiones = [];
    let profesionesGuardadas = JSON.parse(localStorage.getItem(variable));
    if (profesionesGuardadas != null) {
        profesiones = profesionesGuardadas;
    }

    let nombreTrabajador = profesiones[pos].nombre;

    let confirmation = confirm(`¿Desea eliminar al trabajador: ${nombreTrabajador} ?`);

    if (confirmation) {
        profesiones.splice(pos, 1);
        alert(nombreTrabajador + " eliminado con éxito");
        localStorage.setItem(variable, JSON.stringify(profesiones));
        limpiarTabla();
        traerElementos();
    }

};



// Actualizar trabajador
function actualizarDatos(pos) {
    let profesiones = [];
    let profesionesGuardadas = JSON.parse(localStorage.getItem(variable));
    if (profesionesGuardadas != null) {
        profesiones = profesionesGuardadas;
    }

    nombreInput.value = profesiones[pos].nombre;
    profesionInput.value = profesiones[pos].profesion;
    salarioInput.value = profesiones[pos].salario;

    btnActualizar.classList.toggle("d-none");
    btnGuardar.classList.toggle("d-none");

    btnActualizar.addEventListener("click", () => {
        if (nombreInput.value != "") {
            profesiones[pos].nombre = nombreInput.value;
        }

        if (profesionInput.value != "") {
            profesiones[pos].profesion = profesionInput.value;
        }

        if (salarioInput.value != "") {
            profesiones[pos].salario = salarioInput.value;
        }

        localStorage.setItem(variable, JSON.stringify(profesiones));
        alert("Actualiado con éxito");

        nombreInput.value = "";
        profesionInput.value = "";
        salarioInput.value = "";

        limpiarTabla();
        traerElementos();

        btnActualizar.classList.toggle("d-none");
        btnGuardar.classList.toggle("d-none");
    });
};



// Buscar trabajador por nombre
function buscarDato(caracteres){
    let profesiones = [];
    let nombresCoinciden = [];
    let profesionesGuardadas = JSON.parse(localStorage.getItem(variable));
    if (profesionesGuardadas!= null) {
        profesiones = profesionesGuardadas;
    }

    profesiones.forEach(trabajador =>{
        let nombreComparado = trabajador.nombre; 
        let coincide = true;

        for(let i=0; i < caracteres.length; i++){  
            if(nombreComparado[i].toLowerCase() !== caracteres[i].toLowerCase()){
                coincide = false;
            }
        }

        if(coincide){
            nombresCoinciden.push(trabajador);
        }
    });

    limpiarTabla();
    nombresCoinciden.forEach((profesion, i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td> ${(i + 1)} </td>
            <td> ${profesion.nombre} </td>
            <td> ${profesion.profesion} </td>
            <td> ${profesion.salario} </td>
            <td>
                <span class="btn-editar btn btn-warning" onclick= "actualizarDatos(${i})" > 📝 </span> 
                <span class="btn-borrar btn btn-danger" onclick= "borrarDatos(${i})" > ❌ </span> 
            </td>        
        `;
        table.appendChild(fila);
    });
};