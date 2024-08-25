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

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedValue = searchFormEl.elements.user_query.value.trim();
  loaderEl.classList.remove('is-hidden');

  fetchPhotos(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'toRight',
        });
        galleryEl.innerHTML = '';
        searchFormEl.reset();

        return;
      }
      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');
      galleryEl.innerHTML = galleryCardsTemplate;
      simpleLightbox.refresh();
      loaderEl.classList.add('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
