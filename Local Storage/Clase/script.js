// guardar varios datos en el navegador

let compras = {
    producto: "Pan queso",
    precio: 2500,
    cantidad: 3,
    cliente: "Carlos Alvarez"
}

// Guardar los datos en localStorage
localStorage.setItem("compras", JSON.stringify(compras));
alert("Datos guardados con exito");


// Obteber el dato guardado en localStore
let comprasGuardadas = JSON.parse(localStorage.getItem("compras"));
console.log(comprasGuardadas);

// Imprimir en el navegador
for (let compra in comprasGuardadas) {
    document.write(compra + " - " + comprasGuardadas[compra] + "<br>");
}

document.write(" <hr> <br>");

// borrar el dato guardado de localStorage
localStorage.removeItem("nombre");
alert("Borrado con exito");

let objetoCompras = [
    {
        producto: "Pan yuca",
        precio: 3900,
        cantidad: 2,
        cliente: "Juan Buitrago"
    },

    {
        producto: "Pan queso",
        precio: 2500,
        cantidad: 3,
        cliente: "Felipe Olaya"
    },

    {
        producto: "Milo frío",
        precio: 4000,
        cantidad: 1,
        cliente: "Anselmo Ortega"
    }
]

localStorage.setItem("objetoCompras",JSON.stringify(objetoCompras));

let variasComprasGuardadas = JSON.parse(localStorage.getItem("objetoCompras"));

variasComprasGuardadas.forEach(element => {
    document.write(
    `cliente: ${element.cliente} <br>
    producto: ${element.producto} <br>
    precio: ${element.precio} <br>
    cantidad: ${element.cantidad} <br> <br>
    `)
});