const getData = (onSuc, onErr)  => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuc(data);
    })
    .catch((err) => {
      onErr(err);
    });
};


const sendData = (onSuc, onErr, body, unblockButton) => {
  fetch('https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: body
    })
    .then((response) => {
      if (response.ok) {
        onSuc();
      } else {
        throw new Error;
      }
    })
    .catch(() => {
      onErr();
    })
    .finally(() => {
      unblockButton();
    });
};

export { getData, sendData };
