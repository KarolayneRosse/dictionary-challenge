import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;
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

  createAccount(){
    if (this.password === this.confirmPassword) {
      this.auth.register(this.email, this.confirmPassword);
    }else{
      this.errors.passwordError = true;
    }
  }

}
