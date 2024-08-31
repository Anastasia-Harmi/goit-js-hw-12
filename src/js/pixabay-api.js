import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/'; //звертаюсь до власт defaults.baseURL і тепер з доп бібл axios  до get запиту автоматично дод.цей шлях. а вказуємо в запиті тепер лише русурси

export const fetchPhotos = (searchedValue, page) => {
  //передаємо знач інпута та номер стр для показу фото
  const axiosOptions = {
    params: {
      key: '45539852-e7385dbf9677b23660ec365b6',
      q: searchedValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };
  return axios.get('', axiosOptions); // лапки вказують на те, що тут використ базовий url
};
