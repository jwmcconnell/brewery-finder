import Component from './Component.js';

class BreweryItem extends Component {
  renderTemplate() {
    const brewery = this.props.brewery;
    return /*html*/ `
      <li>
        <h2>Arlington Club</h2>
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
        <a href="${brewery.website_url}">Website</a>
      </li>
    `;
  }
}

export default BreweryItem;