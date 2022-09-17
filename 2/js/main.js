/// Функция вывода рандомного числа в диапазоне

function getRandomNumber (firstNumber, secondNumber){
  if (firstNumber >= 0 && firstNumber <= secondNumber) {
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  }
  else {
    return 'Упс! Ошибка!!!! Видимо вы что-то не так';
  }
}

getRandomNumber(0, 100);

/// Фукция проверки строки

function checkMaxLengthString(string, lenString) {
  if(string.length<= lenString && lenString<=140){
    return true;
  }
  return false;
}

checkMaxLengthString("Вау! Вот это фотка!", 19);
