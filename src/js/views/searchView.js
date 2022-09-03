class SearchView {
  #parentElement = document.querySelector('.search');
  #inputElement = this.#parentElement.querySelector('.search__field');

  getQuery() {
    const query = this.#inputElement.value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#inputElement.value = '';
  }

  addHanlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
