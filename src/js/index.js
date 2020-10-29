import Search from './models/Search';

/**
 * Global state variable
 * contains:
 * search object
 * current location object
 */
const state = {};

const controlSearch = async () => {

    // 1. Get search query from the input field
    const query = 'london'; //change this to receive query from search field

    if (query) {

        //2. create a new Search object and add it to the global state variable
        state.search = new Search(query);

        //3. prepare UI for search results i.e show spinner and clear previous searches etc

        //4. send the query to the API
        await state.search.getResults(); 

        //5. Render the results to the UI
        console.log(state.search.result);

    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

