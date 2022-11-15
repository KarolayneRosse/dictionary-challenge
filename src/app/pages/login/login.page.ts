import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  changeInputType = false;

  errors = {
    passwordError: false,
    emailError: false
  };

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login(){
    if (!this.email) {
      alert("You need to inform an email!")
      return;
    }

    this.auth.login(this.email, this.password);
  }

}
