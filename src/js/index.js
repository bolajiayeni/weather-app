import axios from 'axios';

async function getWeather(query) {

    const key = `fe68077f0519486daf1140943202810`;
    const result = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=london&days=7`);

    const data = await result.json();
    console.log(data);
}

getWeather();