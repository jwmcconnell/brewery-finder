import Component from './Component.js';
import Header from './Header.js';
import BreweryList from './BreweryList.js';
import Map from './Map.js';

import breweryApi from '../services/brewery-api.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    const header = new Header();
    const breweryList = new BreweryList({ breweries: [] });
    const map = new Map({ breweries: [] });

    function loadBreweries() {

      breweryApi.getBreweries()
        .then(breweries => {
          breweryList.update({ breweries });
          map.update({ breweries });
        });
    }

    loadBreweries();

    const main = dom.querySelector('main');

    dom.prepend(header.render());

    main.appendChild(breweryList.render());
    main.appendChild(map.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div class="main-container">
        <main></main>
      </div>
    `;
  }
}

export default App;