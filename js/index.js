import process from './dotenv'
const apiKey = process.env.WEATHER_API;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=lagos';
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data;
}

checkWeather();

