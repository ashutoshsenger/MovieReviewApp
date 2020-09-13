import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg="";
  isError = false; 

  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,) { }

  ngOnInit() {
  }

  onSubmit() {
    let responseData = this.authService.checkUser(this.loginForm.value);

    if( responseData.status == true ){
      this.router.navigate(['/homepage']);
      localStorage.setItem('loggedIn','true');
      this.isError = false;
    } else {
      this.errorMsg = responseData.message;
      this.isError = true;
    }
  }

}
