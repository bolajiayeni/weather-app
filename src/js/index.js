import Search from './models/Search';
import Weather from './models/Weather';
import * as searchView from './views/searchView';
import { domElements, renderLoader, clearLoader } from './views/base';

/**
 * Global state variable
 * contains:
 * search object
 * current location object
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
            searchView.renderResults(state.search.result)
        } else {
            searchView.errMsg();
        }

    }
}

domElements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


const r = new Weather(51.52, -0.11);
r.getWeather();


/*
domElements.searchResultsList.addEventListener('click', e => {
    const item = e.target.closest(`.locations__link`);
    
    item.preventDefault();
    console.log('clicked');
});
*/
