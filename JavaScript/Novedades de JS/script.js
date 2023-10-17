// Diferencias entre let, var y const
// Ambito global
var nombreVar = "Pedro";
let nombreLet = "Felipe";
const nombreConst = ["Deisy"];
nombreConst[0] = "Carlos";
nombreConst.push("Santiago");



{ // Ambito local
    var nombreVar = "Andrés";
    let nombreLet = "Juan";
    document.write("Local ------------------ <br>");
    document.write("Nombre var: " + nombreVar + "<br>");
    document.write("Nombre let: " + nombreLet + "<br>");
    document.write("Nombre const: " + nombreConst + "<br> <br>");
}

document.write("Global ------------------ <br>");
document.write("Nombre var: " + nombreVar + "<br>");
document.write("Nombre let: " + nombreLet + "<br>");
document.write("Nombre const: " + nombreConst + "<br> <br>");

// Función de flecha y anonimas

/* ---------------------- Función normal ---------------------- */
function saludar(nombre){
    alert("Hola " + nombre + " 👍");
}

// Ejecutar
saludar(nombreConst);

/* ---------------------- Función de flecha ---------------------- */
let saludarFlecha = (nom) => alert("Hola " + nom + " ✌");

// Ejecutar
saludarFlecha(nombreConst);

/* ---------------------- Función Anonima ---------------------- */
(function(nombre){
    alert("Chao " + nombre + " 😉");
})("Rosa");

/* ---------------------- Función Anonima Flecha ---------------------- */
((nombre) => alert("Bye " + nombre + " 🐱‍🐉"))("Michael");

/* ---------------------- Función CallBack ---------------------- */
function despedir(nombre){
    alert("Chao " + nombre + " 👀");
}

function recibirFn(fn, nombre){
    fn(nombre);
}

recibirFn(despedir, "Martin");

/* ---------------------- Programación asincrona ---------------------- */
setTimeout(despedir, 3000, "Pepe");

/* ---------------------- Template String ---------------------- */
let nombre1 = "Juan";
let nombre2 = "Felipe";

document.write( ` <h1> hola ${nombre1} </h1>
<h1> que más pues ${nombre2} </h1>
<h1> que hay pa' hacer ${nombre1} </h1>
`);

/* ---------------------- DEstructuring / descomponer / Desestructurar ---------------------- */
let frutas = ["Mango", "Manzana", "Fresas"];
let [mango, manzana, fresas] = frutas;
document.write(`la fruta: ${fresas} <br>`);

let empleados = {
    nombres: ["Carlos", "Luis"],
    profesion: ["Dev","Psicologo"]
};

let {nombres, profesion} = empleados;
document.write(`Nombres: ${nombres} <br>`);