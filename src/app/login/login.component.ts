import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = '';
  password = '';
  errorMessage = 'Shobi Shobi yektbou Login/Pass ghaltin ena la'
  invalidLogin = false;
  constructor(private router: Router,
    private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.login + " " + this.password);
    if (this.authentication.authenticate(this.login, this.password)) {
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    }
  

    else {
      this.invalidLogin = true;
    }

  }

}
