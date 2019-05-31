const URL = 'https://api.openbrewerydb.org/breweries';

const breweryApi = {
  getBreweries() {
    return fetch(`${URL}`)
      .then(res => res.json());
  }
};

export default breweryApi;