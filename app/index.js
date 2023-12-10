function userValidation(){
    document.addEventListener('input', function(){
  
      let usersRegistered = localStorage.getItem("records"),
          users = JSON.parse(usersRegistered),
          nameUser = document.getElementById('name-input').value,
          passwordUser = document.getElementById('password-input').value,
          errorMessage = document.getElementById('user-error'),
          marginTopH3 = document.getElementById('margin-top-h3');
      
      submitButton.addEventListener('click', function(event){
        event.preventDefault();

        for(let i = 0; i < users.length; i++){
          let currentProfile = users[i];
          
          if (nameUser == currentProfile.name && passwordUser == currentProfile.password) {
            localStorage.setItem("index", JSON.stringify(i));
  
            errorMessage.style.display = 'none';
            marginTopH3.style.marginTop = '1rem';
  
            submitButton.disabled = false;
            window.location.href = '/app/pages/home/index.html';
  
            break;
          }
          errorMessage.style.display = 'block'
          marginTopH3.style.marginTop = 0;
          errorMessage.innerHTML = "Usuário ou senha incorretos.";
        }
      });
    });
  }
  userValidation();   
  
  const submitButton = document.getElementById('submit-button');