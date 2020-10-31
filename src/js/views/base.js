//Storing all our dom elements in an object so our code is DRY
export const domElements = {
    searchInput: document.querySelector('.search__field'),
    searchForm: document.querySelector('.search'),
    searchResultsList: document.querySelector('.locations__list'),
    searchResults: document.querySelector('.locations'),
    searchItem: document.querySelector('.locations__item')
};

export const elementStrings = {
    loader: 'loading-spinner'
}

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}"></div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
}