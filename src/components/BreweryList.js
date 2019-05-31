import Component from './Component.js';

class BreweryList extends Component {
  renderTemplate() {
    return /*html*/ `
      <ul>
        <li>
          <h2>Arlington Club</h2>
          <p>
            <span>Type:</span>
            <span>Micro</span>
          </p>
          <p>
            <span>City:</span>
            <span>Portland</span>
          </p>
          <p>
            <span>State:</span>
            <span>Oregon</span>
          </p>
          <p>
            <span>Address:</span>
            <span>811 SW Salmon St</span>
          </p>
          <a href="http://www.thearlingtonclub.com">Website</a>
        </li>
      </ul>
    `;
  }
}

export default BreweryList;