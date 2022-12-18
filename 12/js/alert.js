const showError = (errorMessage) => {
  const errorTemplate = document.querySelector('#error').content.querySelector('section');
  const error = errorTemplate.cloneNode(true);
  error.querySelector('h2').textContent = errorMessage;
  error.querySelector('button').remove();
  document.querySelector('body').append(error);
  setTimeout(() => {
    error.remove();
  }, 5000);
};


export { showError };
