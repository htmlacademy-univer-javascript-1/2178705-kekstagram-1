const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewSize = document.querySelector('.img-upload__preview img');

const MAX = 100;
const MIN = 25;
const STEP = 25;
const DEFAULT = 100;

const getScaleImg = (value = DEFAULT) => {
  previewSize.style.transform = `scale(${value / DEFAULT})`;
  scaleValue.value = `${value}%`;
};

const getScaleSmaller = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < MIN){
    newValue = MIN;
  }
  getScaleImg(newValue);
};

const getScaleBigger = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + STEP;
  if (newValue > MAX){
    newValue = MAX;
  }
  getScaleImg(newValue);
};

const resetScale = () => {
  getScaleImg();
};

scaleSmaller.addEventListener('click', getScaleSmaller);
scaleBigger.addEventListener('click', getScaleBigger);

export { resetScale };

