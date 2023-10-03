/*

// Declarar objeto
var verduras = {
    "v1": "Tomate",
    v2: "Cebolla",
    3: "Zanahoria"
}

// Mostrar los datos
document.write("Verdura: " + verduras.v1 + "<br>");
document.write("Verdura: " + verduras.v2 + "<br>");
document.write("Verdura: " + verduras["3"] + "<br>");



var datos = {
    v1 : "texto",
    v2 : 123456,
    v3 : false,
    v4 : function(){return "Hola Mundo"},
    v5: ["array", 636, true],
    v6: {
        vv1 : "Otro objeto",
        vv2 : 987654
    }
}


document.write("Datos: " + datos.v4() + "<br>");
document.write("Datos: " + datos.v6.vv2 + "<br>");



// Llenar un objeto vacio
// Forma 1
var datos = {};
datos.nombre = "Juan";
datos.telefono = 3124567890;


document.write("Nombre: " + datos.nombre + "<br>");
document.write("Teléfono: " + datos.telefono + "<br>");



// Forma 2
var datos = {
    nombre: [],
    telefono: [],
    email: []
};


// Ciclo for in anidado con ciclo for normal
let cantidad = parseInt(prompt("Digite cantidad de datos"));
for (let x = 0; x < cantidad; x++) {
    for(var clave in datos){
        datos[clave][x] = prompt("Ingrese " + clave + " " + x);
    }   
}


for (let j = 0; j < cantidad; j++) {
    for(var k in datos){
        document.write(k + ": " +  datos[k][j] + "<br>");
    }    
    document.write("<hr>");
};

*/

// Objetos dentro de arreglos
var productos = {
  nombre: [],
  precio: [],
  cantidad: [],
};

var cantidadPro = parseInt(prompt("Digite cantidad de productos"));

for (let i = 0; i < cantidadPro; i++) {
  for (const key in productos) {
    productos[key][i] = prompt("Digite " + key + " del producto " + (i + 1));
  }
}

var totalVen = 0;
for (let j = 0; j < cantidadPro; j++) {
  for (const key in productos) {
    document.write(key + ": " + productos[key][j] + "<br>");
  }
  var totalPro = Number(productos.precio[j]) * Number(productos.cantidad[j]);
  document.write("-----------------------------------------------  <br>");
  document.write("Total: " + totalPro + "<br>");

  totalVen += totalPro;
  document.write("<hr>");
}

document.write("<h1> Total de venta: " + totalVen + "</h1> ");
