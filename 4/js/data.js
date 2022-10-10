import {getRandomNumber} from './util.js';


///База с комментариями
const txt = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

///База с именами коментаторов
const names = [
  'Марк Цукерберг',
  'Райан Гослинг',
  'zxcMAN2012',
  'PRO100ANDREW',
  'Русский Медведь',
  '撞车两千八'
];

///Создание массива описания к фото
const descriptionArr = [
  'Я здесь похож на Гагачада',
  'Я здесь самый крутой',
  'Я на тачке',
  'Я ем капусту с овощами',
  'Худею... Вместо Кока Колы пью Кока Колу Зеро );',
  'Заболел...',
  'Учу брата новому приёму "Стрела"!',
  'Муд: кушать оливье'
];


const getDescription = () => descriptionArr[getRandomNumber(0, descriptionArr.length-1)];

///Создаём массив уникальных id
const idArr = [];

///Функция нахожения id
const getId = function (firstNumber, secondNumber){
  let i = getRandomNumber(firstNumber, secondNumber);
  if (idArr.indexOf(i) > -1){
    i = getId(firstNumber, secondNumber);
  }
  else{
    idArr.push(i);
  }
  return i;
};

///Создаём массив уникальных id комментаторов
const idCommentArr = [];

///Функция нахождения id комментатора
const getIdComment = function (firstNumber, secondNumber){
  let i = getRandomNumber(firstNumber, secondNumber);
  if (idCommentArr.indexOf(i) > -1){
    i = getId(firstNumber, secondNumber);
  }
  else{
    idCommentArr.push(i);
  }
  return i;
};

///Создаём массив уникальных адресов
const urlArr = [];

///Функция нахождения url
const getUrl = function(firstNumber, secondNumber){
  let i = getRandomNumber(firstNumber, secondNumber);
  if(urlArr.indexOf(i) > -1){
    i = getUrl(firstNumber,secondNumber);
  }
  else {
    urlArr.push(i);
  }
  return i;
};

///Функция лайков
const getLikes = (firstNumber, secondNumber) => getRandomNumber(firstNumber, secondNumber);

///Функция аватара комментатора
const getAvatar = function (min, max) {
  const i = getRandomNumber(min, max);
  return `img/avatar-${ i }.svg`;
};

///Создание строки комментариев для проверки на дубликат
let tempMessage = '';

///Создание комментария
const getMessage = function () {
  let i = getRandomNumber(0, 1);
  let message = '';
  while (i <= 1) {
    if (message !== '') {
      if (message.indexOf(tempMessage) > -1){
        getMessage();
      }
      else {
        message += ` ${txt[getRandomNumber(0, txt.length - 1)]}`;
        tempMessage = '';
      }
    }
    else {
      message += txt[getRandomNumber(0, txt.length - 1)];
      tempMessage += message;
    }
    i++;
  }
  return message;
};

///Создание имени комментатора
const getName = () => names[getRandomNumber(0, names.length-1)];
const getComments = function () {
  const commentsArr = [];
  for (let i = 0; i < getRandomNumber(1, 20); i++) {
    commentsArr.push(getComment(getMessage(), getName()));
  }
  return commentsArr;
};

///Функция получения одного объекта
function getObject(){
  return {
    id: getId(1, 25),
    url: `photos/${  getUrl(1, 25)  }.jpg`,
    description: getDescription(),
    likes: getLikes(15, 200),
    comments: getComments()
  };
}

///Функция получения коментария
function getComment(message, name) {
  return {
    id: getIdComment(1, 500),
    avatar: getAvatar(1, 6),
    message,
    name
  };
}

///Создание 25 объектов в массиве
const getObjects = function () {
  const photoCount = 25;
  const objectsArray = [];
  for (let i = 0; i < photoCount; i++) {
    objectsArray.push(getObject());
  }
  return objectsArray;
};

export {getObjects};
