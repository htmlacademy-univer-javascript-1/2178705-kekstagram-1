import {EFFECTS} from './dictionary.js';

const filterRange = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');
const form = document.querySelector('.img-upload__form');
const filterPreview = document.querySelector('.img-upload__preview img');
const effects = 'effects__preview--';

const noneEffect = EFFECTS[0];
let chosenEffect = noneEffect;

filterValue.value = 0;

noUiSlider.create(filterRange, {
  range: {
    min: noneEffect.min,
    max: noneEffect.max
  },
  start: noneEffect.max,
  step: noneEffect.step,
  connect: 'lower'
});

const isDefault = () => {
  if (chosenEffect === noneEffect) {
    filterRange.classList.add('hidden');
    filterPreview.style.filter = 'none';
  } else {
    filterRange.classList.remove('hidden');
  }
};

const updateSlider = () => {
  isDefault();
  filterRange.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max
    },
    step: chosenEffect.step,
    start: chosenEffect.max
  });
};

const resetEffects = () => {
  chosenEffect = noneEffect;
  updateSlider();
};

form.addEventListener('change', (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    filterPreview.className = 'img-upload__preview';
    const effectID = evt.target.value;
    filterPreview.classList.add(`${effects}${effectID}`);
    chosenEffect = EFFECTS.find((effect) => effect.name === effectID);
    updateSlider();
  }
});

filterRange.noUiSlider.on('update', () => {
  filterValue.value = filterRange.noUiSlider.get();
  filterPreview.style.filter = `${chosenEffect.filter}(${filterValue.value}${chosenEffect.unit})`;
});

export { resetEffects };

