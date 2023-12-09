export class user{
  
    constructor(username, email, password, confirmPassword){
      this._username = username;
      this._email = email;
      this._password = password;
      this._confirmPassword = confirmPassword;
    }
  
    getEmail(){
      return this._email;
    }
  
    getPassword(){
      return this._password;
    }

    getUsername(){
      return this._username;
    }
}