import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {
  render() {
    const form = this.renderDOM();
    const input = form.querySelector('input');

    form.addEventListener('submit', event => {
      event.preventDefault();
      const queryProps = {
        city: input.value
      };
      queryProps.page = 1;
      hashStorage.set(queryProps);
    });

    window.addEventListener('hashchange', () => {
      setInputFromHash();
    });

    function setInputFromHash() {
      const city = hashStorage.get().city;
      if(city) {
        input.value = city;
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