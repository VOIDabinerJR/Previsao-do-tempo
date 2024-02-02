const key = "849ff98095c0d7d62e387e1b49b4941f"

function buttonClick() {
    let cidade = document.querySelector("cidade")

    findCity(cidade)

}

async function findCity() {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( reply => reply.json())

    showWeather(data)
}

function showWeather() {
    console.log(data)
    document.querySelector(".cidade").innerHTML = `Tempo em ${data.name}`
    document.querySelector(".temperatura").innerHTML = `${Math.floor(data.main.temp)}Tempo em ${data.name}`
    


}

