
# Weather API 

Esse é um projeto simples usando a [OpenWeather API](https://openweathermap.org/), embora sendo simples foi meu primeiro contato com requisições HTTP e também minha primeira vez recebendo dados da Web, até então (19/09/2022, data da criação da pasta do projeto) nunca havia realizado tal feito, aprendi vendo o [vídeo](https://www.youtube.com/watch?v=VS8EBgPwsSU&t=2412s) do [Matheus Battisti](https://github.com/matheusbattisti).



## Desafios

Acredito que meus principais desafios nesse projeto foram:
- Na época meu primeiro contato com CSS responsivo.
- Primeiro contato com "display".
- Receber dados via formulário / input usando JavaScript.
- Fazer requisições HTTP usando fetch().
- Manipular o DOM de acordo com os resultados recebidos via HTTP + JS.
## Aprendizados

Por final aprendi algumas coisas interessantes como: 

#### Primeira vez usando medidas responsivas como "vh" e "rem".
```css
body{
  background: linear-gradient(180deg, #594cee 0%, #8dd0f5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

...

#weather-data{
  border-top: 1px solid #fff;
  margin-top: 1.5rem;
  padding-top: .7rem;
  text-align: center;
}
```

#### Primeira vez usando mexendo com "display".
```css
.form-input-container{
    display: flex;
}

...

.hide{
    display: none;
}
```

#### Pegar dados via form / input usando JavaScript.
```javascript
searchBtn.addEventListener("click", (e) => {

  e.preventDefault()

  const city = cityInput.value

  if (!!city) {
    showWeatherData(city)
  }

})

```


#### Usando a API [OpenWeather API](https://openweathermap.org/)
```javascript
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
```

### Manipulando o DOM com base nos resultados do fetch()
Uma coisa muito legal desse trecho é que eu recebo as informações vindas da função getWeatherData() e em seguida manipulo com base nelas o DOM, como por exemplo recebendo a sigla do país da região que pesquisei e concatenando com outras informações e junto a outra API passo essa "concatenação" como atributo "src" da imagem, assim mostrando a bandeira desse país.
```javascript
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
```
# Resultado

![Form Vazio](https://github.com/Victor-Lis/Weather-API/blob/main/Screenshots/empty.png)

![São Paulo](https://github.com/Victor-Lis/Weather-API/blob/main/Screenshots/sp.png)

![Tokyo](https://github.com/Victor-Lis/Weather-API/blob/main/Screenshots/tokyo.png)
## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)

