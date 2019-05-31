import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {
  render() {
    const form = this.renderDOM();
    const input = form.querySelector('input');

    form.addEventListener('submit', event => {
      event.preventDefault();
      const queryProps = {
        by_city: input.value
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
        input.value = by_city;
      }
    }

    setInputFromHash();

    return form;
  }
  renderTemplate() {
    return /*html*/`
      <form>
          <input type="text">
          <button>Submit</button>
      </form>
    `;
  }
}

export default Search;