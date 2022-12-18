///Получаем рандомное число
const getRandomNumber = function (firstNumber, secondNumber){
  if (firstNumber >= 0 && firstNumber <= secondNumber) {
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  }
  else {
    throw {name: 'Упс! Ошибка!!!!', message: 'Видимо вы что-то не так ввели!'};
  }
};

const getRandomElementsArray = (arr, count) => {
  const copiedArray = arr.slice();
  const newArray = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomNumber(0, copiedArray.length - 1);
    newArray.push(copiedArray[randomIndex]);
    copiedArray.splice(randomIndex, 1);
  }
  return newArray;
};


/// Фукция проверки строки
const checkMaxLengthString = (string, lenString) => string.length <= lenString;

checkMaxLengthString('Вау! Вот это фотка!', 19);

const isEscape = (evt) => evt.key === 'Escape';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export {getRandomNumber, isEscape, debounce, getRandomElementsArray};
