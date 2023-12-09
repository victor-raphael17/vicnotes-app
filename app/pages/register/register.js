import { user } from '../../model/user.js';

let main = function() {

  document.getElementById('form-register').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-passwd').value;
  });

  let user1 = new user(username, email, password, confirmPassword);

  document.getElementById('clear-btn').addEventListener('click', function(){
    let field = document.querySelectorAll('#form-register input');

    field.forEach(field => { field.value = '';});
  });
}

main();