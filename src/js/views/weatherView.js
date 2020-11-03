import { domElements } from './base';

const formatDate = el => el.replace(/-/g, "/");

const giveDay = (date) => {
    let d = formatDate(date);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let temp = new Date(d);
    var dayName = days[temp.getDay()];
    return dayName;
};

const carryUmbrella = el =>{
    if (el === 0) {
        return 'You should not carry an umbrella';
    }

    else {
        return 'You should carry an umbrella';
    } 
};

const renderSvg = el => {

    switch(el) {
        
        case ('Sunny' || 'Clear'):
            return 'day';
            break;
        case ('Partly cloudy' || 'Cloudy'):
            return 'cloudy-day-2';
            break;
        case ('Overcast' || 'Mist' || 'Fog' || 'Freezing fog'):
            return 'cloudy';
            break;
        case ('Patchy rain possible' || 'Patchy freezing drizzle possible' || 'Patchy light drizzle' || 'Light drizzle' || 'Freezing drizzle' || 'Heavy freezing drizzle'):
            return 'rainy-5';
            break;
        case ('Patchy snow possible' || 'Blowing snow' || 'Blizzard' || 'Patchy light snow' || 'Light snow' || 'Patchy moderate snow' || 'Moderate snow' || 'Patchy heavy snow' || 'Heavy snow' || 'Light snow showers' || 'Moderate or heavy snow showers'):
            return 'snowy-6';
            break;
        case ('Patchy sleet possible' || 'Light sleet' || 'Moderate or heavy sleet' || 'Ice pellets' || 'Light sleet showers' || 'Moderate or heavy sleet showers' || 'Light showers of ice pellets' || 'Moderate or heavy showers of ice pellets'):
            return 'rainy-7';
            break;
        case ('Thundery outbreaks possible' || 'Patchy light rain with thunder' || 'Moderate or heavy rain with thunder' || 'Patchy light snow with thunder' || 'Moderate or heavy snow with thunder'):
            return 'thunder';
            break;
        case ('Light rain' || 'Patchy light rain' || 'Moderate rain at times' || 'Moderate rain' || 'Light freezing rain' || 'Light rain shower' || 'Moderate or heavy rain shower' || 'Torrential rain shower'): 
            return 'rainy-3';
            break;
        case ('Heavy rain at times' || 'Heavy rain' || 'Moderate or heavy freezing rain'):
            return 'rainy-6';
            break;
        default:
            return 'day';
    }

}

const balanceIcon = el => {

    if (el === 'Partly cloudy' || el === 'Cloudy') {
        return 'weather__icon weather__icon--balance';
    } else {
        return 'weather__icon';
    }
}

const renderHtml = result => {
    const markup = `
        <div class="weather__item">

        <header class="weather__item--header">
            <p class="weather__date">${formatDate(result.date)}</p>
            <h2 class="weather__day">${giveDay(result.date)}</h2>
            <div class="weather__details">
                <div class="weather__temperature">${Math.round(result.day.avgtemp_c)}&deg;C</div>
                <div class="weather__description">${result.day.condition.text}</div>
            </div>
        </header>
        
        <div class="weather__umbrella">${carryUmbrella(result.day.daily_will_it_rain)}</div>

        <img src="img/animated_svg/${renderSvg(result.day.condition.text)}.svg" class="${balanceIcon(result.day.condition.text)}" alt="Weather SVG icon">
        </div>
    `;

    console.log(typeof(result.day.daily_will_it_rain));

    domElements.weatherResults.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = results => {
    results.forEach(renderHtml);
};