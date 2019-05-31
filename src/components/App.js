import Component from './Component.js';
import Header from './Header.js';
import BreweryList from './BreweryList.js';
import Map from './Map.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    const header = new Header();
    const breweryList = new BreweryList();
    const map = new Map();

    const main = dom.querySelector('main');

    dom.prepend(header.render());

    main.appendChild(breweryList.render());
    main.appendChild(map.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main></main>
      </div>
    `;
  }
}

export default App;