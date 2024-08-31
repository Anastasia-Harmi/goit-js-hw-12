//
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const simpleLightbox = new SimpleLightbox('.js-gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  overlayOpacity: 1,
});

const onSearchFormSubmit = async event => {
  event.preventDefault(); // Зупиняємо дію за замовчуванням
  const searchedValue = searchFormEl.elements.user_query.value.trim(); // Зчитуємо значення пошукового запиту

  // Якщо поле пусте, показуємо попередження
  if (searchedValue === '') {
    iziToast.warning({
      message: 'Please enter a search query.',
      position: 'bottomRight',
    });
    return;
  }

  try {
    loaderEl.classList.remove('is-hidden'); // Показуємо лоадер
    const response = await fetchPhotos(searchedValue, 1); // Запит до API
    const data = response.data; // Отримуємо дані з відповіді

    // Перевірка наявності результатів
    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomRight',
      });
      galleryEl.innerHTML = ''; // Очищаємо галерею
      searchFormEl.reset(); // Очищаємо інпут
      loaderEl.classList.add('is-hidden'); // Ховаємо лоадер
      return;
    }

    // Створюємо шаблон карток зображень
    const galleryCardsTemplate = data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    galleryEl.innerHTML = galleryCardsTemplate; // Вставляємо картки у галерею
    simpleLightbox.refresh(); // Оновлюємо SimpleLightbox
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'An error occurred. Please try again later.',
      position: 'bottomRight',
    });
  } finally {
    loaderEl.classList.add('is-hidden'); // Ховаємо лоадер
  }
};

// Додаємо обробник події на форму
searchFormEl.addEventListener('submit', onSearchFormSubmit);
