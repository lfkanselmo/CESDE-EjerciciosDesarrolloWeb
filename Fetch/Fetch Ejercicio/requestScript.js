// Variables globales
let table = document.querySelectorAll(".table tbody");
let url = "http://localhost/apiRestaurante/";

// Funcion para realizar la petición
function getData(urlRequest) {
    fetch(urlRequest,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((data) => data.json())
    .then((pedidos) => console.log(pedidos))
    .catch((error) => console.log(error.message))
}

// Ejecutar funcion
getData(url);