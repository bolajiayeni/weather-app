import Search from './models/Search';
import Weather from './models/Weather';
import * as searchView from './views/searchView';
import * as weatherView from './views/weatherView';
import { domElements, renderLoader, clearLoader } from './views/base';

/**
 * Global state variable
 * contains:
 * search object
 * current location/weather object
 */
const state = {};

const controlSearch = async () => {

    // 1. Get search query from the input field
    const query = searchView.getInput();
    console.log(query);

    if (query) {

        //2. create a new Search object and add it to the global state variable
        state.search = new Search(query);

        //3. prepare UI for search results i.e show spinner and clear previous searches etc
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(domElements.searchResultsList)

        //4. send the query to the API
        await state.search.getResults(); 

        //5. Render the results to the UI

        clearLoader();
        if (state.search.result.length !=0) {
            searchView.renderResults(state.search.result);
            console.log(state.search.result)
        } else {
            searchView.errMsg();
        }

    }
}

domElements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
    
});


const controlWeather = async () => {

    //get Id and then replace the # with nothing
    let id = window.location.hash.replace('#', '');

    if (id) { 

        //Split id into latitude and longitude
        id = id.split(',');
        const lat = id[0];
        const lon = id[1];

        console.log(id);
        console.log(lat, lon);

        //Prepare UI for changes
        state.weather = new Weather(lat, lon);

        try {

            //get weather data
            await state.weather.getWeather();

            //render the recipe
            weatherView.renderResults(state.weather.result);
            console.log(state.weather.result);
            
        } catch (error) {
            alert(`There seems to be a problem with connecting to the API, please contact the developer on twitter: @Bojthedev`);
        }
        
    }

    
}

['hashchange','load'].forEach(event => window.addEventListener(event, controlWeather)); //fires the control weather function when the hash is changed or the page is reloaded

/*
domElements.searchResultsList.addEventListener('click', e => {
    const item = e.target.closest(`.locations__link`);
    
    item.preventDefault();
    console.log('clicked');
});
*/
