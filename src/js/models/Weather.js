import axios from 'axios';

export default class Weather {

    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    async getWeather() {

        try {
            const key = `fe68077f0519486daf1140943202810`;
            const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${this.lat},${this.long}&days=6`);

            const forecast = response.data.forecast.forecastday;
            this.result = forecast;

            console.log(this.result);
        } 
        
        catch (error) {
            alert(error)
        }
        
    }
}