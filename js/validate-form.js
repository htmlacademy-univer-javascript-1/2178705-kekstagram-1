const uploadSelectPhoto = document.querySelector('#upload-select-image');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const symbolsForHashtag = /^#[a-zа-яё0-9]{1,19}$/;

const pristine = new Pristine(uploadSelectPhoto, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const validateHashtags = (symbol) => {
  const hashtagsLower = symbol.toLowerCase();
  const hashtags = hashtagsLower.split(' ');
  const uniqueHashtags = [...new Set(hashtags)];
  if (symbol === '') {
    return true;
  }

  for (const hashtag of hashtags){
    if (!symbolsForHashtag.test(hashtag)) {
      return false;
    }
  }
  return hashtags.length <= 5 && hashtags.length === uniqueHashtags.length;
};

const validateDescriptions = (description) => description.length <= 140;

const validateForm = (evt) => {
  if(!pristine.validate()) {
    evt.preventDefault();
  }
};

pristine.addValidator(
  textHashtags,
  validateHashtags,
  'Максимум хэштегов: 5. Максимальная длина хэштега: 20 символов'
);

pristine.addValidator(
  textDescription,
  validateDescriptions,
  'Максимальная длина 140 символов'
);

export { validateForm };
