import { isEscape } from './util.js';
import { validateForm } from './validate-form.js';

const formPicture = document.querySelector('#upload-select-image');
const inputImage = document.querySelector('#upload-file');
const valueInputImage = inputImage.getAttribute('value');
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__overlay');
const formClose = document.querySelector('.img-upload__cancel');
const hashtags = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');


const resetFormInput = () => {
  inputImage.value = valueInputImage;
  description.value = '';
  hashtags.value = '';
};

const closeForm = () => {
  form.classList.add('hidden');
  body.classList.remove('modal-open');
  resetFormInput();
  // eslint-disable-next-line no-use-before-define
  removeEventListenerForm();
};

const closeFormByEsc = (evt) => {
  const activeElem = document.activeElement;
  if (isEscape(evt) && activeElem !== hashtags && activeElem !== description) {
    closeForm();
  }
};

const  addEvtToForm = () => {
  formClose.addEventListener('click', closeForm);
  document.addEventListener('keydown', closeFormByEsc);
  formPicture.addEventListener('submit', validateForm);
};

inputImage.addEventListener('change', function () {
  if(this.value) {
    body.classList.add('modal-open');
    form.classList.remove('hidden');
    addEvtToForm();
  }
});


const removeEventListenerForm = () => {
  formClose.removeEventListener('clock', closeForm);
  document.removeEventListener('keydown', closeFormByEsc);
  formPicture.removeEventListener('submit', validateForm);
};
