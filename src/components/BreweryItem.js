import Component from './Component.js';

class BreweryItem extends Component {
  renderTemplate() {
    const brewery = this.props.brewery;
    const label = this.props.label;
    return /*html*/ `
      <li>
        <h2>${brewery.name}</h2>
        <section>
          <span>Type:</span>
          <span>${brewery.brewery_type}</span>
        </section>
        <section>
          <span>City:</span>
          <span>${brewery.city}</span>
        </section>
        <section>
          <span>State:</span>
          <span>${brewery.state}</span>
        </section>
        <section>
          <span>Address:</span>
          <span>${brewery.street}</span>
        </section>
        <a href="${brewery.website_url}" class=${!brewery.website_url ? 'hidden' : ''}>Website</a>
        <section class="map-label">
          <span>${label}</span>
        </section>
      </li>
    `;
  }
}

export default BreweryItem;