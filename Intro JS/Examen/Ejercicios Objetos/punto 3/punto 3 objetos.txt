/*
3.	del siguiente objeto { producto, precio, cantidad} llénelo dinámicamente con mínimo 3 productos 
y muestre el total a pagar de los 3 productos y también el total de la compra con el iva aumentado.
*/

let objeto = {
    "producto" : [],
    "precio" : [],
    "cantidad" : []
}

let cantidad = 0;
let total = 0;

while (cantidad < 3){
    cantidad = parseInt(prompt("Ingrese la cantidad de productos a ingresar"));
}

for(let i= 0; i < cantidad; i++){
    for(var k in objeto){
        if(k == "precio" || k == "cantidad"){
            objeto[k][i] = Number(prompt("Ingrese " + k + " del objeto " + (i+1)));
        }else{
            objeto[k][i] = prompt("Ingrese " + k + " del objeto " + (i+1));
        }
    }
}

for(let i=0; i < cantidad; i++){
    for(var k in objeto){
        document.write(k + ": " + objeto[k][i] + "<br>");
    }

    let totalProducto = objeto["precio"][i] * objeto["cantidad"][i];
    document.write("Subtotal: " + totalProducto + "<br>");

    total += totalProducto;

    document.write("----------------------------------------- <br>");
}

let iva = totalProducto * 0.19;
document.write("Total venta: " + total + "<br>");
document.write("IVA: " + iva + "<br>");
document.write("Total con iva: " + (total+iva) + "<br>");

