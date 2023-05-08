// Clima api
const api_key = 'cbc8a446acb1c5ce2e426faa97f7c02e';
const cidade = 'Petrópolis, BR';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${api_key}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperatura = data.main.temp;
    const descricao = data.weather[0].description;
    const icone = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const velVento = data.wind.speed;
    const umidade = data.main.humidity;

    document.getElementById('temperatura').innerHTML = `<p class="descricao clima">Temperatura: ${Math.floor(temperatura)} °C<p>`;
    document.getElementById('velVento').innerHTML = `<p class="descricao clima">Ventos: ${velVento} km/h<p>`;
    document.getElementById('umidade').innerHTML = `<p class="descricao clima">Umidade: ${umidade}%<p>`;
    document.getElementById('icone').src = icone;
  });
