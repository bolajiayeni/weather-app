import { domElements } from './base';

const renderHtml = result => {
    const markup = `
        <div class="weather__item">

        <header class="weather__item--header">
            <p class="weather__date">${result.date}</p>
            <h2 class="weather__day">Sunday</h2>
            <div class="weather__details">
                <div class="weather__temperature">${result.day.avgtemp_c}&deg;C</div>
                <div class="weather__description">Light Showers</div>
            </div>
        </header>
        
        <div class="weather__umbrella">You should carry an umbrella</div>

        <img src="img/animated_svg/day.svg" class="weather__icon" alt="">
        </div>
    `;

    domElements.weatherResults.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = results => {
    results.forEach(renderHtml);
};