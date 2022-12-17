import './util.js';
/* eslint-disable no-unused-vars */
import { getData } from './fetch.js';
import './form.js';
import  './filter.js';
import './scale.js';
import {showFilteredPhotos} from './img-filters.js';

function showError(errorMessage) {
  const errorTemplate = document.querySelector('#error').content.querySelector('section');
  const error = errorTemplate.cloneNode(true);
  error.querySelector('h2').textContent = errorMessage;
  error.querySelector('button').remove();
  document.querySelector('body').append(error);
  setTimeout(() => {
    error.remove();
  }, 5000);
}

getData(showFilteredPhotos, showError);

// eslint-disable-next-line no-console

