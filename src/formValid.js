const submit = document.getElementById('submit');

const validate = (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('input-email');
  const countrySelection = document.getElementById('country');
  const zipInput = document.getElementById('input-zip').value;

  const errorMsg = document.getElementById('error');
  const errorMsgCounntry = document.getElementById('errorCountry');
  const errorMsgZip = document.getElementById('errorZip');

  let valid = true;
  let zip = /[0-9]{5}-[0-9]{3}/i;
  let resultZip = zip.test(zipInput);

  if (!emailInput.value) {
    errorMsg.classList.add('visible');
    emailInput.classList.add('invalid');
    errorMsg.setAttribute('aria-hidden', false);
    errorMsg.setAttribute('aria-hidden', true);
  } else {
    errorMsg.classList.remove('visible');
    emailInput.classList.remove('invalid');
  }

  if (countrySelection.value === 'invalid') {
    errorMsgCounntry.classList.add('visible');
    countrySelection.classList.add('invalid');
    errorMsgCounntry.setAttribute('aria-hidden', false);
    errorMsgCounntry.setAttribute('aria-hidden', true);
  } else {
    errorMsgCounntry.classList.remove('visible');
    countrySelection.classList.remove('invalid');
  }

  if (resultZip === false) {
    errorMsgZip.classList.add('visible');
    zipInput.classList.add('invalid');
    errorMsgZip.setAttribute('aria-hidden', false);
    errorMsgZip.setAttribute('aria-hidden', true);
  } else {
    errorMsgZip.classList.remove('visible');
    zipInput.classList.remove('invalid');
  }
  return valid;
};

submit.addEventListener('click', validate);

export { validate };
