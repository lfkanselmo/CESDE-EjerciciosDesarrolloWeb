/*
5.	Del ejercicio anterior ordene de mayor a menor los empleados teniendo en cuenta el salario.
*/

let empleados = [
    {"nombre":"pedro", "salario":5000000, "profesion": "Abogado"} ,
    {"nombre":"Angie", "salario":3900000, "profesion": "Odontóloga"} ,
    {"nombre":"Luis", "salario":2500000, "profesion": "Asesor Bancario"},
    {"nombre":"Lina", "salario":4500000, "profesion": "Psicoloca"}  
    ] ;


    empleados.sort((a,b) => b["salario"] - a["salario"]);

    empleados.forEach( e => {
        for (var k in e){
            document.write(k + ": " + e[k] + "<br>");
            document.write("------------------------------ <br>");
        }
    })