import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const user = {
  name: 'joshua@123',
  password: '12345',
};

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private _httpClient: HttpClient, private _router: Router) {}

  loginCheck(email: string, password: string) {
    if (user.name == email && user.password == password) {
      this._router.navigate(['/home']);
    } else {
      alert('Email or Password Incorrect');
      
    }
  }
}
