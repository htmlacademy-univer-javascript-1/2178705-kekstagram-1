import {showBigPicture} from './render-big-pictures.js';

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const photosContainer = document.querySelector('.pictures');

const getPhotoElement = function (photoObject){
  const clonedPhoto = newPictureTemplate.cloneNode(true);
  clonedPhoto.querySelector('img').src = photoObject.url;
  clonedPhoto.querySelector('.picture__likes').textContent = photoObject.likes;
  clonedPhoto.querySelector('.picture__comments').textContent = photoObject.comments.length;
  clonedPhoto.addEventListener('click', () => showBigPicture(photoObject));

  return clonedPhoto;
};

const renderPhotos = function (photos){
  const fragment = document.createDocumentFragment();
  for (let i = 0; i<photos.length; i++){
    fragment.appendChild(getPhotoElement(photos[i]));
  }
  photosContainer.appendChild(fragment);
};


export {renderPhotos};

