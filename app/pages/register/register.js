import { user } from "../../model/user.js";
import { registerService } from "../../service/user.service.js";

let main = function() {
  
  document.getElementById('clear-btn').addEventListener('click', function(){

    let field = document.querySelectorAll('#form-register input');

    field.forEach(field => { field.value = ''; });

  });
}

main();

function validateNameField() {
  const nameInput = document.getElementById('name-input'),
    nameError = document.getElementById('name-error'),
    paddingBottom = document.getElementById('padding-bottom');

  if (nameInput.validity.valueMissing) {
    nameError.textContent = '*This field is required.';

    paddingBottom.style.paddingBottom = '0';

    nameError.style.display = 'block';
    
    return false;
  }

  if (nameInput.validity.patternMismatch) {
    nameError.textContent = '*Enter a valid username.';

    paddingBottom.style.paddingBottom = '0';

    nameError.style.display = 'block';

    return false;
  }

  paddingBottom.style.paddingBottom = '1rem';

  nameError.style.display = 'none';

  return true;
}

function validateEmailField() {
  const emailInput = document.getElementById('email-input'),
    emailError = document.getElementById('email-error'),
    paddingBottom = document.getElementById('padding-bottom2');

  if (emailInput.validity.valueMissing) {
    emailError.textContent = '*This field is required.';

    paddingBottom.style.paddingBottom = '0';

    emailError.style.display = 'block';
    
    return false;
  }

  if (emailInput.validity.patternMismatch) {
    emailError.textContent = '*Enter a valid email.';

    paddingBottom.style.paddingBottom = '0';

    emailError.style.display = 'block';

    return false;
  }

  paddingBottom.style.paddingBottom = '1rem';

  emailError.style.display = 'none';

  return true;
}

function validatePasswordField() {
  const nameInput = document.getElementById('password-input'),
    nameError = document.getElementById('password-error'),
    paddingBottom = document.getElementById('padding-bottom3');

  if (nameInput.validity.valueMissing) {
    nameError.textContent = '*This field is required.';

    paddingBottom.style.paddingBottom = '0';

    nameError.style.display = 'block';

    return false;
  }

  if (nameInput.validity.patternMismatch) {
    nameError.textContent = '*The password must have at least 4 digits and a number.';

    paddingBottom.style.paddingBottom = '0';

    nameError.style.display = 'block';

    return false;
  }

  paddingBottom.style.paddingBottom = '1rem';

  nameError.style.display = 'none';

  return true;
}

function passwordConfirmation(){
  const password = document.getElementById('password-input').value,
    confirmPassword = document.getElementById('confirm-password-input').value,
    paddingBottom = document.getElementById('padding-bottom4'),
    nameError = document.getElementById('confirm-password-error');
  
  if (password !== confirmPassword){
    nameError.textContent = '*Passwords must to be the same.';

    paddingBottom.style.paddingBottom = '0';

    nameError.style.display = 'block';
    
    return false;

  }

  paddingBottom.style.paddingBottom = '1rem';

  nameError.style.display = 'none';

  return true;
}

function enableSubmitButtonOnFormChange() {
  const submitButton = document.getElementById('submit-button');

  submitButton.disabled = true;
}

enableSubmitButtonOnFormChange();

function onSubmit() {
  const userService = new registerService();
  const name = document.getElementById('name-input').value,
    email = document.getElementById('email-input').value,
    password = document.getElementById('password-input').value;

  let user1 = new user(name, email, password);

  console.log(userService.saveLocal(user1));
}

document.querySelector('#name-input').addEventListener('input', function() {

  validateNameField();

});

document.querySelector('#email-input').addEventListener('input', function() {

  validateEmailField();

});

document.querySelector('#password-input').addEventListener('input', function () {

  validatePasswordField();

});

document.querySelector('#confirm-password-input').addEventListener('input', function () {

  passwordConfirmation();

});

document.querySelector('#form-register').addEventListener('input', function () {

  const submitButton = document.getElementById('submit-button');

  if (validateNameField() && validateEmailField() && validatePasswordField() && passwordConfirmation()){
    submitButton.disabled = false;

    submitButton.addEventListener('click', function () {
      onSubmit();
    });

  } else {
    submitButton.disabled = true;

  }

});