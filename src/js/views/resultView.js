import icons from '../../img/icons.svg';

class ResultView {
  #parentElement = document.querySelector('.results');
  #data;
  #errorMessage = 'We could not find the recipe. Please try another one!';
  #successMessage = '';

  render(data) {
    this.#data = data;
    this.#data.forEach(item => {
      const markup = this.#generateMarkup(item);
      this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    });
  }

  #clear() {
    this.#parentElement.innerHTML = '';
  }

  #generateMarkup(item) {
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${item.id}">
          <figure class="preview__fig">
            <img src="${item.imageUrl}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${item.title}</h4>
            <p class="preview__publisher">${item.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultView();
