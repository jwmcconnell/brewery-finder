import Component from './Component.js';
import BreweryItem from './BreweryItem.js';

class BreweryList extends Component {

  render() {
    const dom = this.renderDOM();

    const breweries = this.props.breweries;

    breweries.forEach(brewery => {
      const breweryItem = new BreweryItem({ brewery });
      dom.appendChild(breweryItem.render());
    });

    return dom;
  }


  renderTemplate() {
    return /*html*/ `
      <ul></ul>
    `;
  }
}

export default BreweryList;