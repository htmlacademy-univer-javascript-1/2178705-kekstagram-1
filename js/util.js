///Получаем рандомное число
const getRandomNumber = function (firstNumber, secondNumber){
  if (firstNumber >= 0 && firstNumber <= secondNumber) {
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  }
  else {
    throw {name: 'Упс! Ошибка!!!!', message: 'Видимо вы что-то не так ввели!'};
  }
};

/// Фукция проверки строки
const checkMaxLengthString = (string, lenString) => string.length <= lenString;

checkMaxLengthString('Вау! Вот это фотка!', 19);

export {getRandomNumber};
