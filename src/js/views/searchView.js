import { domElements } from './base';

export const getInput = () => domElements.searchInput.value; //this function gets the vale of the query for the search input field

const formatName = el => el.split(',')[0];


const renderHtml = result => {

    const markup = `
        <li class="locations__item">

            <a href="#${result.lat},${result.lon}" class="locations__link">
                <span class="locations__result--left">
                    <svg class="locations__icon">
                        <use xlink:href="img/sprite.svg#icon-chevron-small-right
                        "></use>
                    </svg>
                </span>

                <span class="locations__result--right">

                    <div class="locations__name">${formatName(result.name)}</div>
                    <div class="locations__woeid">${result.country}</div>

                </span>
            </a>

        </li>
    `;
    domElements.searchResultsList.insertAdjacentHTML('beforeend', markup);
}

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.locations__link'));
    resultsArr.forEach(el=> {
        el.classList.remove('selected');
    });

    document.querySelector(`.locations__link[href*="#${id}"]`).classList.add('selected');
}

export const errMsg = () => {

    const markup = `
            <li class="error__msg">
                Your search query returned no results!
            </li>
        `;
    
    domElements.searchResultsList.insertAdjacentHTML('beforeend', markup);
    
};

export const clearResults = () => {
    domElements.searchResultsList.innerHTML = '';
};

export const renderResults = results => {
    results.forEach(renderHtml);
};

export const clearInput = () => {domElements.searchInput.value = ''};