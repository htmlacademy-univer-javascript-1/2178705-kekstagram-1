/// Функция вывода рандомного числа в диапазоне

function getRandomNumber (firstNumber, secondNumber){
  if (firstNumber >= 0 && firstNumber <= secondNumber) {
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  }
  else {
    throw {name: 'Упс! Ошибка!!!!', message: 'Видимо вы что-то не так ввели!'};
  }
}

getRandomNumber(0, 100);

/// Фукция проверки строки

const checkMaxLengthString = (string, lenString) => string.length <= lenString;

checkMaxLengthString('Вау! Вот это фотка!', 19);
