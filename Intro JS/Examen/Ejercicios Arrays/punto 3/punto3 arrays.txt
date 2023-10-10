/*
3.	Del siguiente arreglo 
[zanahoria,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] solo las frutas en el navegador.
*/

let cosas = ["zanahoria","banano","manzana","pera","cebolla","papa","fresas","Ajo","Sandía"];

let frutas = ["banano","manzana","pera","fresas","Sandía"];

for(let i=0; i < cosas.length; i++){
    if(frutas.includes(cosas[i])){
        document.write(cosas[i] + "<br>");
    }
}