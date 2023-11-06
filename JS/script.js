// Variaveis

const apiKey = "9639efc9770bb4cb1d25209fea1642bc"
const apiCountryURL = "https://flagsapi.com/png/"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const wheaterData = document.querySelector("#weather-data")
const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const wheatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

// Funções

const getWeatherData = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const data = await fetch(apiWeatherURL)
        .then(data => data.json())

    if(data.cod == 200){
        return data
    }else{
        alert(`Opa! Parece que não conseguimos encontrar :/`)
        return false
    }

}

const showWeatherData = async (city) => {

    let data = await getWeatherData(city)

    if (!!data) {
        wheaterData.classList.remove("hide")
        cityElement.innerText = data.name
        tempElement.innerText = parseInt(data.main.temp)
        descElement.innerText = data.weather[0].description
        wheatherIconElement.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        )
        countryElement.setAttribute("src", `${apiCountryURL}${data.sys.country}/flat/64.png`)
        humidityElement.innerText = `${data.main.humidity}%`
        windElement.innerText = `${data.wind.speed}km/h`
    }

}

// Eventos

searchBtn.addEventListener("click", (e) => {

    e.preventDefault()

    const city = cityInput.value

    if (!!city) {
        showWeatherData(city)
    }


})
