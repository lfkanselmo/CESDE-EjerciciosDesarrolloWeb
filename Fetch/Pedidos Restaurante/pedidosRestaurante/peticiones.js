let btn = document.querySelector(".btn");
let respuesta = document.querySelector(".respuesta");
let tabla = document.querySelector(".registros tbody");
let btnGuardar = document.querySelector(".btn-guardar");

peticionBD();

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
