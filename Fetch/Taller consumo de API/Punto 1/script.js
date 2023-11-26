// Globales
let url = "https://jsonplaceholder.typicode.com/photos";
let fotos = [];
let numeroFotos = 16;
let contenedorFotos = document.querySelector(".photos");

fetch(url)
    .then(response => response.json())
    .then(response => ponerImagenes(response))
    .catch(console.log("error"));

function ponerImagenes(response) {

    for (let i = 0; i < numeroFotos; i++) {
        fotos.push(response[i]);
        console.log(fotos[i]);
    }

    for (let j = 0; j < fotos.length; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 item");

        let img = document.createElement("img");
        img.setAttribute("class", "img-fluid");
        img.setAttribute("src", `${fotos[j].url}`);
        let titulo = document.createElement("p");
        let id = document.createElement("p");
        let albumId = document.createElement("p");

        titulo.textContent = `Titulo: ${fotos[j].title}`;
        id.textContent = `ID: ${fotos[j].id}`;
        albumId.textContent = `Album ID: ${fotos[j].albumId}`;
 
        div.appendChild(img);
        div.appendChild(titulo);
        div.appendChild(id);
        div.appendChild(albumId);

        contenedorFotos.appendChild(div);
    }

}