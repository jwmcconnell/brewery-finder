import Component from './Component.js';
import Header from './Header.js';
import BreweryList from './BreweryList.js';
import Map from './Map.js';
import Search from './Search.js';

import breweryApi from '../services/brewery-api.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    const header = new Header();
    const breweryList = new BreweryList({ breweries: [] });
    const map = new Map({ breweries: [] });
    const search = new Search();

    function loadBreweries() {

      breweryApi.getBreweries()
        .then(breweries => {
          breweryList.update({ breweries });
          map.update({ breweries });
        });
    }

    loadBreweries();

    window.addEventListener('hashchange', () => {
      loadBreweries();
    });

    const main = dom.querySelector('main');
    const listContainer = dom.querySelector('.list-container');

    dom.prepend(header.render());

    listContainer.appendChild(search.render());
    listContainer.appendChild(breweryList.render());

    main.appendChild(map.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div class="main-container">
        <main>
          <section class="list-container"></section>
        </main>
      </div>
    `;
  }
}

export default App;