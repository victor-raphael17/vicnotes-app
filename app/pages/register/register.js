import { user } from '../../model/user.js';
import { registerService } from '../../service/user.service.js';

let main = function() {

  document.addEventListener('DOMContentLoaded', function(){

    let usersRegistered = localStorage.getItem("records"),
      user = JSON.parse(usersRegistered);
  
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `<p>Nome: ${user[0].username}</p><p>Senha: ${user[0].password}</p>`;
  
    });

  document.getElementById('clear-btn').addEventListener('click', function(){

    let field = document.querySelectorAll('#form-register input');

    field.forEach(field => {field.value = '';});

  });
}

main();

function validateNameField() {

  const nameInput = document.getElementById('username'),
    nameError = document.getElementById('username-error');

  if (nameInput.validity.valueMissing) {
    nameError.textContent = 'This field is required.';

    nameError.style.display = 'block';
    
    return false;
  }

  if (nameInput.validity.patternMismatch) {
    nameError.textContent = 'Enter a valid username.';

    nameError.style.display = 'block';

    return false;
  }

  nameError.style.display = 'none';

  return true;
}

function validateEmailField() {

  const emailInput = document.getElementById('email'),
    emailError = document.getElementById('email-error');

  if (emailInput.validity.valueMissing) {
    emailError.textContent = 'This field is required.';

    emailError.style.display = 'block';
    
    return false;
  }

  if (emailInput.validity.patternMismatch) {
    emailError.textContent = 'Enter a valid email.';

    emailError.style.display = 'block';

    return false;
  }

  emailError.style.display = 'none';

  return true;
}

function validatePasswordField() {

  const passwdInput = document.getElementById('password'),
    passwdError = document.getElementById('passwd-error');

  if (passwdInput.validity.valueMissing) {
    passwdError.textContent = 'This field is required.';

    passwdError.style.display = 'block';

    return false;
  }

  if (passwdInput.validity.patternMismatch) {
    passwdError.textContent = 'The password must have at least 4 digits and a number.';

    passwdError.style.display = 'block';

    return false;
  }

  passwdError.style.display = 'none';

  return true;
}

function passwordConfirmation(){

  const passwd = document.getElementById('password').value,
    confirmPasswd = document.getElementById('confirm-passwd').value,
    confirmPasswdError = document.getElementById('conf-passwd-error');
  
  if (passwd !== confirmPasswd){
    confirmPasswdError.textContent = 'Passwords must to be the same.';

    confirmPasswdError.style.display = 'block';
    
    return false;

  }

  confirmPasswdError.style.display = 'none';

  return true;
}

function enableSubmitButtonOnFormChange() {

  const submitButton = document.getElementById('submit-btn');

  submitButton.disabled = true;

}

enableSubmitButtonOnFormChange();

function onSubmit() {
  
  const userService = new registerService(),
    username = document.getElementById('username').value,
    email = document.getElementById('email').value,
    password = document.getElementById('password').value;

  let user1 = new user(username, email, password);
  console.log(userService.saveLocal(user1));

}

document.querySelector('#username').addEventListener('input', function() {

  validateNameField();

});

document.querySelector('#email').addEventListener('input', function() {

  validateEmailField();

});

document.querySelector('#password').addEventListener('input', function () {

  validatePasswordField();

});

document.querySelector('#confirm-passwd').addEventListener('input', function () {

  passwordConfirmation();

});

document.querySelector('#form-register').addEventListener('change', function () {

  const submitButton = document.getElementById('submit-btn');

  if (validateNameField() && validateEmailField() && validatePasswordField() && passwordConfirmation()){
    submitButton.disabled = false;

  } else {
    submitButton.disabled = true;

  }

});