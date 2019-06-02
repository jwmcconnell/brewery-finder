import QUERY from '../services/QUERY.js';
const URL = 'https://api.openbrewerydb.org/breweries';

const breweryApi = {
  getBreweries(queryProps) {
    let url = '';
    if(queryProps) {
      url = QUERY.stringify(queryProps);
    }
    return fetch(`${URL}?${url}&per_page=10`)
      .then(res => res.json());
  }
};

export default breweryApi;