import Search from './models/Search';
import * as searchView from './views/searchView';
import { domElements } from './views/base';

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

        //4. send the query to the API
        await state.search.getResults(); 

        //5. Render the results to the UI
        searchView.renderResults(state.search.result)
        console.log(state.search.result.length);
    }
}

domElements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

