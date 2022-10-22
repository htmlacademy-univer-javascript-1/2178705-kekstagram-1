import {resultArray} from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const photosContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderPhoto = function ({url, likes, comments}){
  const clonedPhoto = newPictureTemplate.cloneNode(true);
  clonedPhoto.querySelector('img').src = url;
  clonedPhoto.querySelector('.picture__likes').textContent = likes;
  clonedPhoto.querySelector('.picture__comments').textContent = comments;
};

const renderPhotos = function (photos){
  for (let i = 0; i<photos.length; i++){
    renderPhoto(photos[i]);
  }
  photosContainer.appendChild(fragment);
};

renderPhotos(resultArray);
export {photosContainer};

