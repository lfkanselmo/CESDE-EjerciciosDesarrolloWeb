/*
4.	Del arreglo empleados = [
{nombre:”pedro”, salario:5.000.000, profesión: “Abogado”} ,
{nombre:”Angie”, salario:3.900.000, profesión: “Odontóloga”} ,
{nombre:”Luis”, salario:2.500.000, profesión: “Asesor Bancario”},
{nombre:”Lina”, salario:4.500.000, profesión: “Psicoloca”}  
] 
Muestre en el navegador la suma total de los salarios, corrija el nombre de la profesión de Lina, 
agregue apellidos a los empleados. 
*/

let empleados = [
    {"nombre":"pedro", "salario":5000000, "profesion": "Abogado"} ,
    {"nombre":"Angie", "salario":3900000, "profesion": "Odontóloga"} ,
    {"nombre":"Luis", "salario":2500000, "profesion": "Asesor Bancario"},
    {"nombre":"Lina", "salario":4500000, "profesion": "Psicoloca"}  
    ] ;


let sumSalarios = 0;

let nombreExter = "Lina";
let profe = "Psicóloga";


    for(i= 0; i <empleados.length; i++){
        for(var e in empleados[i]){
            if(e == "nombre"){
                if(empleados[i][e] == nombreExter){
                    empleados[i]["profesion"] = profe;
                }
            }
        
            if(e == "profesion"){
                sumSalarios += empleados[i]["salario"];
            }
        
            document.write( e + ": " + empleados[i][e] + "<br>");
        }

        document.write("----------------------------------------- <br>")
    }

    document.write(" <h3> El salario total de los empleados es: " + sumSalarios + "</h3>")

