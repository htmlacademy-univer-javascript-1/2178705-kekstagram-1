import { renderPhotos } from './render.js';
import { debounce } from './util.js';
import { getRandomElementsArray } from './util.js';

const RANDOM_PHOTOS_AMOUNT = 10;

const imgFilters = document.querySelector('.img-filters');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

const comparePhotos = (photoA, photoB) => photoB.comments.length - photoA.comments.length;
const getSortedPhoto = (photo) => photo.slice().sort(comparePhotos);

const removePhotos = () => {
  const picture = document.querySelectorAll('.picture');
  picture.forEach((photo) => {
    photo.remove();
  });
};

const changePhoto = (array, button) => {
  removePhotos();
  const active = document.querySelector('.img-filters__button--active');
  active.classList.remove('img-filters__button--active');
  renderPhotos(array);
  button.classList.add('img-filters__button--active');
};

const showFilteredPhotos = (photos) => {
  renderPhotos(photos);
  imgFilters.classList.remove('img-filters--inactive');
  defaultFilter.addEventListener('click', debounce(() => {
    changePhoto(photos, defaultFilter);
  }));
  randomFilter.addEventListener('click', debounce(() => {
    changePhoto(getRandomElementsArray(photos, RANDOM_PHOTOS_AMOUNT), randomFilter);
  }));
  discussedFilter.addEventListener('click', debounce(() => {
    changePhoto(getSortedPhoto(photos), discussedFilter);
  }));
};

export {showFilteredPhotos};
