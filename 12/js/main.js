import './util.js';
/* eslint-disable no-unused-vars */
import { getData } from './fetch.js';
import './form.js';
import  './filter.js';
import './scale.js';
import {showFilteredPhotos} from './img-filters.js';
import { showError } from './alert.js';
import './render.js';
import './validate-form.js';
import './render-big-pictures.js';
import './img-filters.js';


getData(showFilteredPhotos, showError);

// eslint-disable-next-line no-console

