import Component from './Component.js';

class BreweryList extends Component {
  renderTemplate() {
    return /*html*/ `
      <ul>
        <li>
          <h2>Arlington Club</h2>
          <section>
            <span>Type:</span>
            <span>Micro</span>
          </section>
          <section>
            <span>City:</span>
            <span>Portland</span>
          </section>
          <section>
            <span>State:</span>
            <span>Oregon</span>
          </section>
          <section>
            <span>Address:</span>
            <span>811 SW Salmon St</span>
          </section>
          <a href="http://www.thearlingtonclub.com">Website</a>
        </li>
        <li>
          <h2>Cascade Brewing Barrel House</h2>
          <section>
            <span>Type:</span>
            <span>Micro</span>
          </section>
          <section>
            <span>City:</span>
            <span>Portland</span>
          </section>
          <section>
            <span>State:</span>
            <span>Oregon</span>
          </section>
          <section>
            <span>Address:</span>
            <span>939 SE Belmont St</span>
          </section>
          <a href="http://www.cascadebrewing.com">Website</a>
        </li>
        <li>
          <h2>Scout Beer</h2>
          <section>
            <span>Type:</span>
            <span>Micro</span>
          </section>
          <section>
            <span>City:</span>
            <span>Portland</span>
          </section>
          <section>
            <span>State:</span>
            <span>Oregon</span>
          </section>
          <section>
            <span>Address:</span>
            <span>1516 SE 10th Ave</span>
          </section>
          <a href="http://www.scoutpdx.com">Website</a>
        </li>
      </ul>
    `;
  }
}

export default BreweryList;