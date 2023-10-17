/*
11.	Cree un listado de compras, con función que pida el número de productos, 
nombre y valor del producto por medio de otra función imprima la información digitadas.
1 -  arroz $ 2.500 x 3 = 7.500
2 - aceite $ 4.500 x 1 = 4.500
3 - azúcar $ 2000 x 2 = 4.000
—-----------------------------------
		Total Mercado    16.000

*/

function pedirProductos(n){
    let total = 0;
    for (let i = 1; i <= n; i++) {
        let valor = Number(prompt("Ingrese el valor del producto #" + i));
        if(valor < 0){
            alert("Valor no válido");
            i--;
        } else {
            let pNombre = prompt("Ingrese el nombre del producto");
            let c = parseInt(prompt("Ingrese la cantidad a comprar de " + pNombre));
            total += (valor * c);
            imprimirProducto(valor, i, c, pNombre, (valor * c));            
        }
    }

    document.write(" <h4> Total mercado: " + total + "</h4>");
}

function imprimirProducto(valor, i, c, pNombre, acumulado){
    document.write(i + " - " + pNombre + " $" + valor + " x " + c + " = " + acumulado + "<br>");
}


let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos"));
pedirProductos(cantidadProductos);