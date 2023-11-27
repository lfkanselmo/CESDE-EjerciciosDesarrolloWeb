let cityInput = document.querySelector(".cityInput");
let btnBuscar = document.querySelector(".btnBuscar");
let countrySelect = document.querySelector("#country");
let result = document.querySelector(".result");
let title = document.querySelector(".title");

// Event click on button buscar
btnBuscar.addEventListener("click", ()=>{
    if(cityInput.value === ''){
        showError("Debe ingresar una ciudad");
    }

    apiCall(cityInput.value, countrySelect.value);
})


// Call for API send it city and country
function apiCall(city, country){
    const apiKey = "92840b3e9bad98e47bfb325d708a6c80";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

    fetch(url)
    .then(data => data.json())
    .then(dataJson => {
        if(dataJson.cod === 404){
            showError("Ciudad no encontrada");
        }else{
            cleanHTML();
            showWeather(dataJson);
        }
        
    })
    .catch(error => {
        console.log(error)
    });
}

// Function for show the weather
function showWeather(data){
    const {name, main:{temp}, sys:{country}, weather:[arr]} = data;

    let degress = kelvinToCelsius(temp);

    let content = document.createElement("div");

    content.setAttribute("class", "card-body showTemp colorBg text-white rounded p-4");

    content.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png">
        <h4 class="cityText mb-1 sfw-normal">${name}</h4>
        <h5 class="countryText mb-1 sfw-normal">${country}</h5>
        <p class="mb-2">Temperatura actual: <strong class="temperature">${degress}°C</strong></p>

        <div class="d-flex flex-row align-items-center">
            <p class="mb-0 me-4">${arr.description}</p>
            <i class="fas fa-cloud fa-3x" style="color: #eee;"></i>
        </div>

    `;

    result.appendChild(content);

    cityInput.value = "";
    countrySelect.value = "";
}

// function para convertir temperatura
function kelvinToCelsius(temp){
    return parseInt(temp - 273.15);
}

// Error function
function showError(message){
    console.log(message);
    const alert = document.createElement("p");
    alert.setAttribute("class", "alert-message mb-4 mt-0");
    alert.innerHTML = message;

    title.insertAdjacentElement("afterend", alert);

    setTimeout(()=>{
        alert.remove();
    }, 4000);
}

// Function clean
function cleanHTML(){
    result.innerHTML = "";
}