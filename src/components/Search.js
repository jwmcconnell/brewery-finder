import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {
  render() {
    const form = this.renderDOM();

    const cityInput = form.querySelector('.city-input');
    const stateInput = form.querySelector('.state-select');


    form.addEventListener('submit', event => {
      event.preventDefault();
      const queryProps = {
        by_city: cityInput.value,
        by_state: stateInput.value
      };
      queryProps.page = 1;
      hashStorage.set(queryProps);
    });

    window.addEventListener('hashchange', () => {
      setInputFromHash();
    });

    function setInputFromHash() {
      const by_city = hashStorage.get().by_city;
      if(by_city) {
        cityInput.value = by_city;
      }
    }

    setInputFromHash();

    return form;
  }
  renderTemplate() {
    return /*html*/`
      <form>

        <section>
          <label>City:
            <input class="city-input" type="text">
          </label>

          <label for="state">State:
            <select class="state-select" name="state">
              <option value="">---</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">District of Columbia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Guam">Guam</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Northern Marianas Islands">Northern Marianas Islands</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Virgin Islands">Virgin Islands</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
          </label>
        </section>
        
        <button>Submit</button>
      </form>
    `;
  }
}

export default Search;