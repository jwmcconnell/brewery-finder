import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class Paging extends Component {
  render() {
    const dom = this.renderDOM();

    const prevButton = dom.querySelector('.prev');
    const nextButton = dom.querySelector('.next');

    if(!prevButton) {
      return dom;
    }

    function updatePage(change) {
      const queryProps = hashStorage.get();
      let page = queryProps.page ? parseInt(queryProps.page) : 1;
      page += change;
      hashStorage.set({ page });
    }

    prevButton.addEventListener('click', () => {
      updatePage(-1);
    });

    nextButton.addEventListener('click', () => {
      updatePage(1);
    });

    return dom;
  }

  renderTemplate() {
    const currentPage = parseInt(this.props.currentPage);
    const lastPage = this.props.lastPage;
    return /*html*/ `
      <section class="paging">
          <button class="prev" ${currentPage === 1 ? 'disabled' : ''}>Prev</button>
          <span>page: ${currentPage}</span>
          <button class="next" ${lastPage ? 'disabled' : ''}>Next</button>
      </section>
    `;
  }
}

export default Paging;