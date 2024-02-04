const key = "849ff98095c0d7d62e387e1b49b4941f"
let cidade
var data = ""

function buttonClick() {
 cidade = document.querySelector(".cidade").value
    console.log(cidade)

    findCity(cidade)

}

async function findCity() {

    try {
       const resposta = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + key + "&lang=pt&units=metric" )
       
       if (!resposta.ok) {
          throw new Error("Erro ao obter dados meteorológicos");
       }
 
        data = await resposta.json();
       showWeather(data);
    } catch (erro) {
       console.log("Erro na requisição:"+ erro.message);
    }
 }
 
function showWeather() {
    console.log(data)      
    document.querySelector(".cidade").innerHTML = `Tempo em ${data.main.name}`
    document.querySelector(".temperatura").innerHTML = `${Math.floor(data.main.temp)} ºC`
    document.querySelector(".humidade").innerHTML = `${(data.main.humidity)} %` 
    
    document.querySelector(".ceu").innerHTML = `${(data.weather[0].description)}`
    document.querySelector(".vento").innerHTML = `${(data.wind.speed)} Km/h`
    document.querySelector(".imagemceu").scr = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    document.querySelector(".imagemvento").scr = "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-wind-icon-png-image_4184509.jpg"


    

}

