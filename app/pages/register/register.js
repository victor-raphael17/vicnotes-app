import { user } from '../../model/user.js';

let main = function(){
  document.getElementById('form-register').addEventListener('submit', function(event){
    event.preventDefault();
  });

  document.getElementById('clear-btn').addEventListener('click', function(){

    let field = document.querySelectorAll('#form-register input');
    field.forEach(field => { field.value = '';});

  });
}
main();