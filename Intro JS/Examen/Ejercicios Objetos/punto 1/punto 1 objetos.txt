/*
1.	del siguiente objeto { producto, precio, cantidad} 
llénelo dinámicamente con mínimo 3 productos y muestre sus datos en el navegador.
*/

let objeto = {
    "producto" : [],
    "precio" : [],
    "cantidad" : []
}

let cantidad = parseInt(prompt("Ingrese la cantidad de productos a ingresar"));

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
    document.write("----------------------------------------- <br>");
}