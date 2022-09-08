import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return (
        this._generateMarkupCurrentPageButton() +
        this._generateMarkupNextButton()
      );
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return (
        this._generateMarkupPrevButton() +
        this._generateMarkupCurrentPageButton()
      );
    }

    // Other pages
    if (currentPage > 1 && currentPage < numPages) {
      return (
        this._generateMarkupPrevButton() +
        this._generateMarkupCurrentPageButton() +
        this._generateMarkupNextButton()
      );
    }

    // Page 1, and there are NO other pages
    return thís._generateMarkupCurrentPageButton();
  }

  _generateMarkupNextButton() {
    const currentPage = this._data.page;
    return `
      <button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }

  _generateMarkupCurrentPageButton() {
    const currentPage = this._data.page;
    return `
      <button class="btn--inline btn--active">
        <span>${currentPage}</span>
      </button>
    `;
  }

  _generateMarkupPrevButton() {
    const currentPage = this._data.page;
    return `
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>${currentPage - 1}</span>
      </button>
    `;
  }
}

export default new PaginationView();
