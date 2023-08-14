import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

let user = {
  email: 'joshua@123',
  password: '12345',
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: any;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
}
