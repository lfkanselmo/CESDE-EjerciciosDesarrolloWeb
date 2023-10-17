/*

//TEMPORADAS Y CAPITULOS POR TEMPORADA
var temporadas = parseInt(prompt("Temporadas de la serie"));


for(let i = 1; i <= temporadas; i++){
    document.write(" <br> Inicio de la temporada  " + i + "<br> <br>");

    var capitulos = parseInt(prompt("Capitulos de la temporada " + i));

    for(let j = 1; j <= capitulos; j++){
        document.write("Capitulo # " + j + "<br>");
    }
    
    document.write("<br> Fin de la temporada  " + i + "<br> <br>");
    document.write("------------------------------------------- <br> <br>");
}

*/

//NOTAS DEPENDIENDO DE LA MATERIA
var numMaterias = parseInt(prompt("Ingrese la cantidad de materias"));

let sumNotasMaterias = 0;

for (let i=1; i <= numMaterias; i++){
    var nomMateria = prompt("Ingrese  el nombre de la materia: ");
    let sum = 0;
    document.write("<h2>" + nomMateria.toUpperCase() + " </h2>  <br>");
    var numNotas = parseInt(prompt("Digite cantidad de notas"));
    for(let j = 1; j <= numNotas; j++){
        var nota = Number(prompt("Ingrese la nota: " + j + " de " + nomMateria.toUpperCase()));
        if(nota > 5 || nota < 1){
            alert("Nota no válida");
            j--;
        } else{
            document.write(j + " Nota: " + nota + "<br>");
            sum += nota;
        }
    } 

    let promeNota = sum / numNotas;
    sumNotasMaterias += (promeNota);

    document.write(" <h3> Nota final: " + promeNota.toFixed(2) + " </h3>");

    document.write(" ------------------------------------------------------------ <br>")
}

let finalNota = sumNotasMaterias/numMaterias;
document.write(" <br> <h3> Promedio final de todo el año: " + finalNota.toFixed(2) + "</h3>");

if(finalNota < 3.0){
    document.write("<br> <h1> Perdió el año </h1> <br>");
} else{
    document.write("<br> <h1> Ganó el año </h1> <br>");
}

