import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tempEmail = 'ashutosh@gmail.com';
  tempPassword = '123456ashu';
  responseObj = {
    "status": false,
    "message": ""
  };

  constructor() { }

  checkUser(data){
    if( data.username == this.tempEmail ) {
      if ( data.password == this.tempPassword ) {
        this.responseObj.message = "*Successfully Logged In !";
        this.responseObj.status = true;
        return this.responseObj;
      } else {
        this.responseObj.message = "*Please Enter the correct Password !";
        this.responseObj.status = false;
        return this.responseObj;
      }
    } else {
        this.responseObj.message = "*Please Enter the correct email address !";
        this.responseObj.status = false;
        return this.responseObj;
    }
  }

  get LoginStatus() {
    if(localStorage.getItem('loggedIn') == 'true'){
      return true;
    } else {
      return false;
    }
  }
}
