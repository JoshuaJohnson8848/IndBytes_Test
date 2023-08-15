import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServicesService } from '../services/services.service';

let user = {
  email: 'joshua@123',
  password: '12345',
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _service: ServicesService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  submit() {
    this._service.loginCheck(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
    );
  }
}
