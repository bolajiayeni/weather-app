import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    }
 
    async getResults () {
        try {
            const key = `fe68077f0519486daf1140943202810`;
            const response = await axios(`http://api.weatherapi.com/v1/search.json?key=${key}&q=${this.query}&days=7`);

            this.result = response.data;
        } 
        
        catch (error) {
            alert(`There seems to be a problem with the API, please contact the developer on twitter: @Bojthedev`);
        }
    }
} 