// datos de las base de datos // API
let peliculas = [
    {
        id: 1,
        nombre: "Ironman",
        year: 2008,
        studio: "Marvel"
    },
    {
        id: 2,
        nombre: "Avatar",
        year: 2009,
        studio: "Fox"
    },
    {
        id: 3,
        nombre: "Spiderman",
        year: 2010,
        studio: "Sony"
    },
    {
        id: 4,
        nombre: "Tsunami",
        year: 2011,
        studio: "Twenty"
    },
    {
        id: 5,
        nombre: "Rapidos y furiosos",
        year: 2007,
        studio: "Golden"
    }
]

// llamada para tomar los datos
let getPelis = (pelis) => {

    // Promesa para esperar el tiempo de respuesta
    return new Promise((resolve, reject) => {
        // Simular un retraso de medio segundo
        setTimeout(() => {
            if (pelis.length != 0) {
                resolve(pelis);
            } else {
                reject(new Error("Error: Noy hay datos"));
            }
        }, 500);
    });


};

let peliculasVacias = [];

// función asincrona para obtener películas
async function obtenerPeliculas(pelis) {
    try {
        let datos = await getPelis(pelis);
        console.log(datos);

        datos.forEach(d => {
            document.write(
                `<p><b> Película: </b> ${d.nombre} </p>
                <p><b> Año: </b> ${d.year} </p>
                <p><b> Estudio: </b> ${d.studio} </p>
                <hr>
            `);

        });

    } catch (e) {
        console.log(e);
        document.write("<h2> Lo sentimos, no hay datos para mostrar </h2>")
    }
}


// Ejecutar la función
obtenerPeliculas(peliculas);