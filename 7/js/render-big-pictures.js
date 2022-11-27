import { isEscape } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pictureClose = bigPicture.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');
const commentMessage = commentList.querySelector('.social__comment');

const closePhoto = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureClose.removeEventListener('click', closePhoto);
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', pressEscape);
};

const pressEscape = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const getComment = (comment) => {
  const commentElement = commentMessage.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const fillComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newComment = getComment(comment);
    fragment.appendChild(newComment);
  });
  commentList.appendChild(fragment);
};

const showBigPicture = function (photo) {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  commentList.innerHTML = '';
  fillComments(photo.comments);
  pictureClose.addEventListener('click', closePhoto);
  document.addEventListener('keydown', pressEscape);
};

export { showBigPicture };
