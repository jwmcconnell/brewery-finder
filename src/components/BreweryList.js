import Component from './Component.js';
import BreweryItem from './BreweryItem.js';

class BreweryList extends Component {

  render() {
    const dom = this.renderDOM();

    const breweries = this.props.breweries;

    let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let labelIndex = 0;

    breweries.forEach(brewery => {
      let label = labels[labelIndex++];
      const breweryItem = new BreweryItem({ brewery, label });
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