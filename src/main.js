//
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.loader-btn'); //шукаємо кнопку завантажити ще
const simpleLightbox = new SimpleLightbox('.js-gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  overlayOpacity: 1,
});
let currentPage = 1; //номер групи при першому запиті
let searchedValue = ''; // Зробили змінну глобальною, щоб використ у ф.кнопки завантажити ще

const onSearchFormSubmit = async event => {
  event.preventDefault(); // Зупиняємо дію браузера за замовчуванням

  searchedValue = searchFormEl.elements.user_query.value.trim(); // Зчитуємо значення пошукового запиту

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
    const response = await fetchPhotos(searchedValue, currentPage); // 1Запит до API, викликаємо ф-ію і передаємо в неї значення інпута та номер групи
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
    loadMoreBtnEl.classList.remove('is-hidden');
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

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;
    const response = await fetchPhotos(searchedValue, currentPage);
    console.log(response);
    const data = response.data; // Витягуємо дані з відповіді
    const galleryCardsTemplate = data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);
    simpleLightbox.refresh();
  } catch (err) {
    console.log(err);
  }
};
// Додаємо обробник події на форму
searchFormEl.addEventListener('submit', onSearchFormSubmit);
//Додаємо обробник події на кнопку
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
