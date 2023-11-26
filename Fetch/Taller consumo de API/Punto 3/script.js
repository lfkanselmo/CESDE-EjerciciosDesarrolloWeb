let btnBuscar = document.querySelector(".btnBuscar");
let buscarInput = document.querySelector(".buscar");
let tarjeta = document.querySelector(".card-body");

btnBuscar.addEventListener("click", () => {
    mostrarPokemon();
});


async function mostrarPokemon() {

    let nombre = buscarInput.value;
    let url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`

    await fetch(url)
        .then(pokemon => pokemon.json())
        .then(pokemon => agregarPokemon(pokemon))
        .catch(console.error("error"));
}


function agregarPokemon(pokemon) {
    let textos = document.querySelectorAll(".contenido");
    textos.forEach(t => t.remove());

    let img = document.querySelector(".pokemonImagen");
    let nombre = document.createElement("strong");
    nombre.setAttribute("class", "contenido");

    let poderes = pokemon.abilities;
    let tipos = pokemon.types;

    nombre.textContent = pokemon.name;
    tarjeta.appendChild(nombre);
    img.setAttribute("src", pokemon.sprites.front_default);

    for (let i = 0; i < poderes.length; i++) {
        let power = document.createElement("p");
        power.setAttribute("class", "contenido");
        power.textContent = `Poder ${(i + 1)}: ${poderes[i].ability.name}`;
        power.style.marginBottom = 0;
        tarjeta.appendChild(power);
    }

    for (let j = 0; j < tipos.length; j++) {
        let type = document.createElement("p");
        type.setAttribute("class", "contenido");
        type.textContent = `Tipo ${(j + 1)}: ${tipos[j].type.name}`
        type.style.marginBottom = 0;
        tarjeta.appendChild(type);
    }
}

