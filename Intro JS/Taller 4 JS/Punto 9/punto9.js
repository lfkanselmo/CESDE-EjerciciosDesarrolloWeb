/*
Cree una función que pida el precio de N productos y  
por medio de otra función aumente el iva del 19% y diga al usuario 
el precio total a pagar los productos que compró y el precio de cada uno.
producto 1              = 2.500 
producto 2         	     = 4.500 
producto 3              = 2000 
subtotal                     10.000
Total A pagar   12.200

*/

function productos(n){
    let subTotal = 0;
    for (let i = 1; i <= n; i++) {
        let num =  Number(prompt("Ingrese el valor del producto " + i));
        if(num > 0){
            document.write("Producto #" + i + " = " + num + "<br>");
        subTotal += num;
        } else {
            alert("Valor no válido");
            i--;
        }      
    }
    document.write(" <h3> Subtotal = </h3>" + subTotal.toFixed(2) + "<br>");
    document.write("<h2> Total a pagar </h2> = " + iva(subTotal).toFixed(2));
}

function iva(dinero){
    return dinero + (dinero * 0.19);
}

let num = parseInt(prompt("Ingrese la cantidad de productos"));
productos(num);