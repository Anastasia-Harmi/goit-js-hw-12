const BASE_URL = 'https://pixabay.com/api/?';

export const fetchPhotos = searchedValue => {
  const urlParams = new URLSearchParams({
    key: '45539852-e7385dbf9677b23660ec365b6',
    q: searchedValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
