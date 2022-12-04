import { isEscape } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const templateComment = document.querySelector('.social__comment');
const loader = document.querySelector('.comments-loader');
const socialCommentsCount = document.querySelector('.social__comment-count');
const pictureClose = bigPicture.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');


let commentCount = 0;
const MAX_SIZE = 5;

const closePhoto = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureClose.removeEventListener('click', closePhoto);
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', pressEscape);
  commentCount = 0;
};

const pressEscape = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const getComment = (comment) => {
  const commentElement = templateComment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const fillComments = (comments) => {
  comments.slice(commentCount, commentCount + MAX_SIZE).forEach((comment) =>{
    const newComment = getComment(comment);
    commentList.appendChild(newComment);
    commentCount++;
  });
  socialCommentsCount.innerHTML = `${commentCount} из <span class="comments-count">${comments.length}</span> комментриев`;
  if (comments.length === commentCount) {
    loader.classList.add('hidden');
  }
  else {
    loader.classList.remove('hidden');
  }
};

const showBigPicture = function (photo) {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  pictureClose.addEventListener('click', closePhoto);
  document.addEventListener('keydown', pressEscape);
  commentList.innerHTML = '';
  fillComments(photo.comments);
  loader.onclick = () => fillComments(photo.comments);
};

export { showBigPicture };
