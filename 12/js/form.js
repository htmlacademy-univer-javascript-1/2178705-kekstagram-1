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
const submit = document.querySelector('#upload-submit');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');


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

const addEvtToForm = () => {
  formClose.addEventListener('click', closeForm);
  document.addEventListener('keydown', closeFormByEsc);
  formPicture.addEventListener('submit', validateForm);
};

inputImage.addEventListener('change', function () {
  if(this.value) {
    body.classList.add('modal-open');
    form.classList.remove('hidden');
    addEvtToForm();
    const newFile = inputImage.files[0];
    imgPreview.src = URL.createObjectURL(newFile);
  }
});

const removePost = (message) => {
  body.removeChild(message);
};


const removeEventListenerForm = () => {
  formClose.removeEventListener('clock', closeForm);
  document.removeEventListener('keydown', closeFormByEsc);
  formPicture.removeEventListener('submit', validateForm);
};

const getMessage = () => {
  const messageTemp = document.querySelector('#messages').content.querySelector('div');
  const message = messageTemp.cloneNode(true);
  body.append(message);
  return message;
};

const blockButton = () => {
  submit.disabled = true;
  // eslint-disable-next-line no-global-assign
  postMessage = getMessage();
};

const unblockButton = () => {
  submit.disabled = false;
  removePost(postMessage);
};

const onMessageClick = (evt, message, isErr, abort) => {
  if (!evt.target.closest(`.${isErr ? 'error' : 'success'}__inner`)) {
    // eslint-disable-next-line no-use-before-define
    removeMessage(message, abort);
  }
};

const removeMessage = (message, abort) => {
  abort.abort();
  body.removeChild(message);
};

const pressEscOnMessage = (evt, message, abort) => {
  if (isEscape(evt)) {
    removeMessage(message, abort);
  }
};

const crateMessage = (isErr) => {
  closeForm();
  const messageTemp = document.querySelector(`#${isErr ? 'error' : 'success'}`).content.querySelector('section');
  const message = messageTemp.cloneNode(true);
  const button = message.querySelector('button');
  body.append(message);
  const abort = new AbortController();
  button.onclick = () => removeMessage(message, abort);
  message.onclick = (evt) => onMessageClick(evt, message, isErr, abort);
  document.addEventListener('keydown', (evt) => pressEscOnMessage(evt, message, abort), {signal:
  abort.signal});
};

const successPost = () => {
  crateMessage(false);
};

const failPost = () => {
  crateMessage(true);
};

export {imgPreview, blockButton, successPost, failPost, unblockButton};
