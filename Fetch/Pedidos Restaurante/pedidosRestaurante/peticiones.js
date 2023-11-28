let btn = document.querySelector(".btn");
let respuesta = document.querySelector(".respuesta");
let tabla = document.querySelector(".registros tbody");
let btnGuardar = document.querySelector(".btn-guardar");
let clientInput = document.querySelector(".cliente");
let platilloInput = document.querySelector(".platillo");
let precioInput = document.querySelector(".precio");
let cantidadInput = document.querySelector(".cantidad");
let observacionInput = document.querySelector(".observacion");
let imagenInput = document.querySelector(".imagen");

btnGuardar.addEventListener("click", ()=>{
    let pedido = datosForm();
    if(pedido.length != 0){
        enviarPedido(pedido);
    }
});

peticionBD();

function datosForm(){
    if(
    clientInput.value == "" || 
    platilloInput.value == "" ||
    cantidadInput.value == "" ||
    precioInput.value == "" ||
    observacionInput.value == ""
    ){
        alert("todos los campos son obligatorios");
    }
    let datos = {
        platillo: platilloInput.value,
        cliente: clientInput.value,
        precio: precioInput.value,
        cantidad: cantidadInput.value,
        observacion: observacionInput.value
    }

    console.log("datos formulario: " + JSON.stringify(datos));
    return datos;
}

async function peticionBD() {
    let url = "http://localhost/apiRestaurante/";
    await fetch(url)
    .then((datos)=> datos.json())
    .then((pedidos)=>{
        pedidos.forEach( (p,i) => {

            let fila = document.createElement("tr");
            fila.innerHTML = 
            `
                <td> ${i+1} </td>
                <td> ${ p.platillo } </td>
                <td> ${ p.cliente } </td>
                <td> ${ p.precio } </td>
                <td> ${ p.cantidad } </td>
                <td> ${ p.observaciones } </td>
                <td> 
                    <img src="${ p.imagen }" width="20%"/>
                </td>
                <td> 
                    <button class="btn btn-warning mx-1"> 📄 </button>
                    <button class="btn btn-danger mx-1"> ❌ </button>
                </td>
            `
            tabla.appendChild(fila);
        });
    })
    .catch((error)=> console.log(error));
}


// Peticion para enviar pedidos POST
async function enviarPedido(datoPedido){
    let url = "http://localhost/apiRestaurante/";

    try {

        let respuesta = await fetch(url,{
            method: "POST",
            headers: {
                "Content-type":"aplication/jason"
            },

            body: JSON.stringify(datoPedido)
        });

        // Validar la respuesta
        if(!respuesta.ok){
            throw new Error("No se pudo enviar los datos");
        }

        // Respuesta positiva
        let mensaje = await respuesta.text();
        alert(mensaje);
        
    } catch (error) {
        console.log("Error: " + error);
    }
}
